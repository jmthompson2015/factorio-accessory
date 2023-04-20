import * as R from "ramda";

import FileWriter from "../utility/FileWriter.js";

const isBus = (resource) =>
	resource.clientProps ? resource.clientProps.isBus : resource.isBus;

const isMap = (resource) =>
	resource.clientProps ? resource.clientProps.isMap : resource.isMap;

const isRaw = (resource) =>
	resource.clientProps ? resource.clientProps.isRaw : resource.isRaw;

const resourceKeys = (array) => R.map((e) => e.resourceKey, array);

const findRecipes = (myRecipes, outputKey) => {
	let answer;
	const filterFunction = (recipeKey) => {
		const recipe = myRecipes[recipeKey];
		const outputKeys = resourceKeys(recipe.outputs);
		return outputKeys.includes(outputKey);
	};
	const recipeKeys = R.filter(filterFunction, Object.keys(myRecipes));
	if (recipeKeys.length > 0) {
		answer = R.map((key) => myRecipes[key], recipeKeys);
	}

	return answer;
};

const generateAttributes = (myResources, keys) => {
	const reduceFunction = (accum, key) => {
		const resource = myResources[key];
		if (R.isNil(resource)) {
			console.error(`Missing resource for key :${key}:`);
		}
		const name = R.replace(/ /g, "<br>", resource.name);
		let answer = "";

		if (R.isNil(resource.image)) {
			const name = R.replace(/ /g, "\\n", resource.name);
			answer = accum + `${key} [label=\"${name}\"`;
			if (!isRaw(resource)) {
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
			if (!isRaw(resource)) {
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

const generateEdges = (myRecipes, myResources, keys, isBusStop, isRawStop) => {
	const reduceFunction1 = (accum1, key1) => {
		const resource = myResources[key1];
		if ((isBusStop && isBus(resource)) || (isRawStop && isRaw(resource))) {
			return accum1;
		}
		const reduceFunction2 = (accum2, key2) => {
			if (keys.includes(key2)) {
				return accum2 + `${key2} -> ${key1};\n`;
			} else {
				return accum2;
			}
		};
		const recipes = findRecipes(myRecipes, key1);
		const reduceFunction3 = (accum3, recipe) => {
			return R.reduce(
				reduceFunction2,
				accum3,
				resourceKeys(recipe.inputs)
			);
		};

		if (recipes) {
			return R.reduce(reduceFunction3, accum1, recipes);
		}

		return accum1;
	};

	return R.reduce(reduceFunction1, "", keys);
};

const getResourceKeys = (
	myRecipes,
	myResources,
	resourceKey,
	isBusStop,
	isRawStop
) => {
	let answer = [resourceKey];
	const resource = myResources[resourceKey];
	if ((isBusStop && isBus(resource)) || (isRawStop && isRaw(resource))) {
		return answer;
	}
	const recipes = findRecipes(myRecipes, resourceKey);

	if (recipes) {
		const reduceFunction2 = (accum2, recipe) => {
			if (recipe) {
				const inputKeys = R.uniq(resourceKeys(recipe.inputs));
				const reduceFunction1 = (accum1, key1) => {
					const resource = myResources[key1];
					const keys = getResourceKeys(
						myRecipes,
						myResources,
						key1,
						isBusStop,
						isRawStop
					);
					return R.uniq(R.concat(accum1, keys));
				};
				const moreKeys = R.reduce(
					reduceFunction1,
					inputKeys,
					inputKeys
				);

				return R.uniq(R.concat(accum2, moreKeys));
			}
		};

		return R.uniq(R.reduce(reduceFunction2, answer, recipes));
	}

	return answer;
};

const HEADER = `digraph {\nbgcolor=lightgray\n`;
const FOOTER = "}\n";

const DotGenerator = {};

DotGenerator.generate = (myRecipes, myResources, resourceKeys, flags = {}) => {
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
						myRecipes,
						myResources,
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
			myRecipes,
			myResources,
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
		const mapFilter = (key) => {
			if (!myResources[key]) {
				console.error(`Missing resource for key = :${key}:`);
			}
			return isMap(myResources[key]);
		};

		const mapKeys = R.filter(mapFilter, allKeys);
		const mapString = R.reduce(reduceFunction1, "", mapKeys);
		answer += `subgraph cluster_map { label = "Map Resource"; ${mapString}}\n`;
		answer += "\n";
	}

	if (isBusBox) {
		const busFilter = (key) => {
			if (!myResources[key]) {
				console.error(`Missing resource for key = :${key}:`);
			}
			return isBus(myResources[key]);
		};

		const busKeys = R.filter(busFilter, allKeys);
		const busString = R.reduce(reduceFunction1, "", busKeys);
		answer += `subgraph cluster_bus { label = "Main Bus"; ${busString}}\n`;
		answer += "\n";
	}

	if (isRawBox) {
		const rawFilter = (key) => {
			if (!myResources[key]) {
				console.error(`Missing resource for key = :${key}:`);
			}
			return isRaw(myResources[key]);
		};

		const rawKeys = R.filter(rawFilter, allKeys);
		const rawString = R.reduce(reduceFunction1, "", rawKeys);
		answer += `subgraph cluster_raw { label = "Raw Resource"; ${rawString}}\n`;
		answer += "\n";
	}

	if (isLeafSame) {
		answer += `{ rank=same; ${leafString}}\n`;
		answer += "\n";
	}

	answer += generateAttributes(myResources, allKeys);
	answer += "\n";
	answer += generateEdges(
		myRecipes,
		myResources,
		allKeys,
		isBusStop,
		isRawStop
	);
	answer += "\n";
	answer += FOOTER;

	return answer;
};

export default DotGenerator;
