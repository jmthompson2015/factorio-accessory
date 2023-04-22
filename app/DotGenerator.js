import * as R from "../node_modules/ramda/es/index.js";

import FileWriter from "../utility/FileWriter.js";

import ResourceKeyVisitor from "../model/ResourceKeyVisitor.js";

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

	getResourceKeys(recipeKey, isBusStop, isRawStop) {
		const outputKeys = this._recipeFunction.outputKeys(recipeKey);

		const visitor = new ResourceKeyVisitor(
			this._recipeFunction,
			this._resourceFunction,
			isBusStop,
			isRawStop
		);
		this._recipeFunction.accept(recipeKey, visitor);

		return R.uniq(R.concat(outputKeys, visitor.result));
	}

	generate(recipeKeys, flags = {}) {
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
		const reduceFunction3 = (accum, recipeKey) => {
			const outputKeys = this._recipeFunction.outputKeys(recipeKey);
			return accum + R.reduce(reduceFunction1, "", outputKeys);
		};
		let allKeys0 = [];
		let leafString = "";

		if (Array.isArray(recipeKeys)) {
			const reduceFunction2 = (accum, key) =>
				R.uniq(
					R.concat(
						accum,
						this.getResourceKeys(key, isBusStop, isRawStop)
					)
				);
			allKeys0 = R.reduce(reduceFunction2, [], recipeKeys);
			leafString = R.reduce(reduceFunction3, "", recipeKeys);
		} else {
			allKeys0 = this.getResourceKeys(recipeKeys, isBusStop, isRawStop);
			const outputKeys = this._recipeFunction.outputKeys(recipeKeys);
			leafString = R.reduce(reduceFunction1, "", outputKeys);
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
