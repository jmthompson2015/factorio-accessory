import * as R from "ramda";

import FileWriter from "../utility/FileWriter.js";

const generateAttributes = (resourceFunction, keys) => {
	const reduceFunction = (accum, key) => {
		const resource = resourceFunction.resource(key);
		if (R.isNil(resource)) {
			console.error(`Missing resource for key :${key}:`);
		}
		const name = R.replace(/ /g, "<br>", resource.name);
		let answer = "";

		if (R.isNil(resource.image)) {
			const name = R.replace(/ /g, "\\n", resource.name);
			answer = accum + `${key} [label=\"${name}\"`;
			if (!resourceFunction.isRaw(key)) {
				answer += `; shape=box`;
			}
			if (resource.color) {
				answer += `; fillcolor=${resource.color}; style=filled`;
			} else {
				answer += `; fillcolor=white; style=filled`;
			}
			answer += `];\n`;
		} else {
			const name = R.replace(/ /g, "<br/>", resource.name);
			answer +=
				accum +
				`${key} [label=<
	<table cellspacing="0" border="0" cellborder="0">
	   <tr><td fixedsize="true" width="32px" height="32px"><img src="${resource.image}" /></td></tr>
	   <tr><td>${name}</td></tr>
	</table>
>`;
			if (!resourceFunction.isRaw(key)) {
				answer += `; shape=box`;
			}
			if (resource.color) {
				answer += `; fillcolor=${resource.color}; style=filled`;
			} else {
				answer += `; fillcolor=white; style=filled`;
			}
			answer += `];\n`;
		}
		return answer;
	};

	return R.reduce(reduceFunction, "", keys);
};

const generateEdges = (
	recipeFunction,
	resourceFunction,
	keys,
	isBusStop,
	isRawStop
) => {
	const reduceFunction1 = (accum1, key1) => {
		if (
			(isBusStop && resourceFunction.isBus(key1)) ||
			(isRawStop && resourceFunction.isRaw(key1))
		) {
			return accum1;
		}
		const reduceFunction2 = (accum2, key2) => {
			if (keys.includes(key2)) {
				return accum2 + `${key2} -> ${key1};\n`;
			} else {
				return accum2;
			}
		};
		const recipeKeys = recipeFunction.findByOutput(key1);
		const reduceFunction3 = (accum3, recipeKey) => {
			return R.reduce(
				reduceFunction2,
				accum3,
				recipeFunction.inputKeys(recipeKey)
			);
		};

		if (recipeKeys) {
			return R.reduce(reduceFunction3, accum1, recipeKeys);
		}

		return accum1;
	};

	return R.reduce(reduceFunction1, "", keys);
};

const getResourceKeys = (
	recipeFunction,
	resourceFunction,
	resourceKey,
	isBusStop,
	isRawStop
) => {
	let answer = [resourceKey];
	if (
		(isBusStop && resourceFunction.isBus(resourceKey)) ||
		(isRawStop && resourceFunction.isRaw(resourceKey))
	) {
		return answer;
	}
	const recipeKeys = recipeFunction.findByOutput(resourceKey);

	if (recipeKeys) {
		const reduceFunction2 = (accum2, recipeKey) => {
			const inputKeys = R.uniq(recipeFunction.inputKeys(recipeKey));
			const reduceFunction1 = (accum1, key1) => {
				const resource = resourceFunction.resource(key1);
				const keys = getResourceKeys(
					recipeFunction,
					resourceFunction,
					key1,
					isBusStop,
					isRawStop
				);
				return R.uniq(R.concat(accum1, keys));
			};
			const moreKeys = R.reduce(reduceFunction1, inputKeys, inputKeys);

			return R.uniq(R.concat(accum2, moreKeys));
		};

		return R.uniq(R.reduce(reduceFunction2, answer, recipeKeys));
	}

	return answer;
};

const HEADER = `digraph {\nbgcolor=lightgray\n`;
const FOOTER = "}\n";

const DotGenerator = {};

DotGenerator.generate = (
	recipeFunction,
	resourceFunction,
	resourceKeys,
	flags = {}
) => {
	const {
		isBusBox,
		isBusStop,
		isLeafSame,
		isMapBox,
		isOrtho,
		isRawBox,
		isRawStop,
	} = flags;
	const reduceFunction1 = (accum, key) => accum + `${key}; `;
	let allKeys0 = [];
	let leafString = "";

	if (Array.isArray(resourceKeys)) {
		const reduceFunction2 = (accum, key) =>
			R.uniq(
				R.concat(
					accum,
					getResourceKeys(
						recipeFunction,
						resourceFunction,
						key,
						isBusStop,
						isRawStop
					)
				)
			);
		allKeys0 = R.reduce(reduceFunction2, [], resourceKeys);
		leafString = R.reduce(reduceFunction1, "", resourceKeys);
	} else {
		allKeys0 = getResourceKeys(
			recipeFunction,
			resourceFunction,
			resourceKeys,
			isBusStop,
			isRawStop
		);
		leafString = resourceKeys;
	}
	const allKeys = allKeys0.sort();

	let answer = HEADER;

	if (isOrtho) {
		answer += "splines = ortho;\n";
	}

	if (isMapBox) {
		const mapFilter = (key) => resourceFunction.isMap(key);
		const mapKeys = R.filter(mapFilter, allKeys);
		const mapString = R.reduce(reduceFunction1, "", mapKeys);
		answer += `subgraph cluster_map { label = "Map Resource"; ${mapString}}\n`;
		answer += "\n";
	}

	if (isBusBox) {
		const busFilter = (key) => resourceFunction.isBus(key);
		const busKeys = R.filter(busFilter, allKeys);
		const busString = R.reduce(reduceFunction1, "", busKeys);
		answer += `subgraph cluster_bus { label = "Main Bus"; ${busString}}\n`;
		answer += "\n";
	}

	if (isRawBox) {
		const rawFilter = (key) => resourceFunction.isRaw(key);
		const rawKeys = R.filter(rawFilter, allKeys);
		const rawString = R.reduce(reduceFunction1, "", rawKeys);
		answer += `subgraph cluster_raw { label = "Raw Resource"; ${rawString}}\n`;
		answer += "\n";
	}

	if (isLeafSame) {
		answer += `{ rank=same; ${leafString}}\n`;
		answer += "\n";
	}

	answer += generateAttributes(resourceFunction, allKeys);
	answer += "\n";
	answer += generateEdges(
		recipeFunction,
		resourceFunction,
		allKeys,
		isBusStop,
		isRawStop
	);
	answer += "\n";
	answer += FOOTER;

	return answer;
};

export default DotGenerator;
