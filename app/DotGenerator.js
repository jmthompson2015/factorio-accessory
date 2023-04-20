import * as R from "../node_modules/ramda/es/index.js";

import FileWriter from "../utility/FileWriter.js";

const HEADER = `digraph {\nbgcolor=lightgray\n`;
const FOOTER = "}\n";

class DotGenerator {
	constructor(recipeFunction, resourceFunction) {
		this._recipeFunction = recipeFunction;
		this._resourceFunction = resourceFunction;
	}

	generateAttributes(keys) {
		const reduceFunction = (accum, key) => {
			const resource = this._resourceFunction.resource(key);
			let answer = "";
			const name = R.replace(/ /g, "<br/>", resource.name);
			answer +=
				accum +
				`${key} [label=<
	<table cellspacing="0" border="0" cellborder="0">
	   <tr><td fixedsize="true" width="32px" height="32px"><img src="${resource.image}" /></td></tr>
	   <tr><td>${name}</td></tr>
	</table>
>`;
			if (!this._resourceFunction.isRaw(key)) {
				answer += `; shape=box`;
			}
			if (resource.color) {
				answer += `; fillcolor=${resource.color}; style=filled`;
			} else {
				answer += `; fillcolor=white; style=filled`;
			}
			answer += `];\n`;

			return answer;
		};

		return R.reduce(reduceFunction, "", keys);
	}

	generateEdges(keys, isBusStop, isRawStop) {
		const reduceFunction1 = (accum1, key1) => {
			if (
				(isBusStop && this._resourceFunction.isBus(key1)) ||
				(isRawStop && this._resourceFunction.isRaw(key1))
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
			const recipeKeys = this._recipeFunction.findByOutput(key1);

			if (recipeKeys) {
				const reduceFunction3 = (accum3, recipeKey) => {
					return R.reduce(
						reduceFunction2,
						accum3,
						this._recipeFunction.inputKeys(recipeKey)
					);
				};

				return R.reduce(reduceFunction3, accum1, recipeKeys);
			}

			return accum1;
		};

		return R.reduce(reduceFunction1, "", keys);
	}

	getResourceKeys(resourceKey, isBusStop, isRawStop) {
		let answer = [resourceKey];
		if (
			(isBusStop && this._resourceFunction.isBus(resourceKey)) ||
			(isRawStop && this._resourceFunction.isRaw(resourceKey))
		) {
			return answer;
		}
		const recipeKeys = this._recipeFunction.findByOutput(resourceKey);

		if (recipeKeys) {
			const reduceFunction2 = (accum2, recipeKey) => {
				const inputKeys = R.uniq(
					this._recipeFunction.inputKeys(recipeKey)
				);
				const reduceFunction1 = (accum1, key1) => {
					const resource = this._resourceFunction.resource(key1);
					const keys = this.getResourceKeys(
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
			};

			return R.uniq(R.reduce(reduceFunction2, answer, recipeKeys));
		}

		return answer;
	}

	generate(resourceKeys, flags = {}) {
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
						this.getResourceKeys(key, isBusStop, isRawStop)
					)
				);
			allKeys0 = R.reduce(reduceFunction2, [], resourceKeys);
			leafString = R.reduce(reduceFunction1, "", resourceKeys);
		} else {
			allKeys0 = this.getResourceKeys(resourceKeys, isBusStop, isRawStop);
			leafString = resourceKeys;
		}
		const allKeys = allKeys0.sort();

		let answer = HEADER;

		if (isOrtho) {
			answer += "splines = ortho;\n";
		}

		if (isMapBox) {
			const mapFilter = (key) => this._resourceFunction.isMap(key);
			const mapKeys = R.filter(mapFilter, allKeys);
			const mapString = R.reduce(reduceFunction1, "", mapKeys);
			answer += `subgraph cluster_map { label = "Map Resource"; ${mapString}}\n`;
			answer += "\n";
		}

		if (isBusBox) {
			const busFilter = (key) => this._resourceFunction.isBus(key);
			const busKeys = R.filter(busFilter, allKeys);
			const busString = R.reduce(reduceFunction1, "", busKeys);
			answer += `subgraph cluster_bus { label = "Main Bus"; ${busString}}\n`;
			answer += "\n";
		}

		if (isRawBox) {
			const rawFilter = (key) => this._resourceFunction.isRaw(key);
			const rawKeys = R.filter(rawFilter, allKeys);
			const rawString = R.reduce(reduceFunction1, "", rawKeys);
			answer += `subgraph cluster_raw { label = "Raw Resource"; ${rawString}}\n`;
			answer += "\n";
		}

		if (isLeafSame) {
			answer += `{ rank=same; ${leafString}}\n`;
			answer += "\n";
		}

		answer += this.generateAttributes(allKeys);
		answer += "\n";
		answer += this.generateEdges(allKeys, isBusStop, isRawStop);
		answer += "\n";
		answer += FOOTER;

		return answer;
	}
}

export default DotGenerator;
