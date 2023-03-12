const R = require("ramda");

const FileWriter = require("../utility/FileWriter.js");

const FactorioRecipe = require("../artifact/FactorioRecipe.js");
const FactorioResource = require("../artifact/FactorioResource.js");

const resourceKeys = (array) => R.map((e) => e.resourceKey, array);

const findRecipes = (outputKey) => {
	let answer;
	const filterFunction = (recipeKey) => {
		const recipe = FactorioRecipe[recipeKey];
		const outputKeys = resourceKeys(recipe.outputs);
		return outputKeys.includes(outputKey);
	};
	const recipeKeys = R.filter(filterFunction, Object.keys(FactorioRecipe));
	if (recipeKeys.length > 0) {
		answer = R.map((key) => FactorioRecipe[key], recipeKeys);
	}

	return answer;
};

const generateAttributes = (keys) => {
	const reduceFunction = (accum, key) => {
		const resource = FactorioResource[key];
		if (R.isNil(resource)) {
			console.error(`Missing resource for key :${key}:`);
		}
		const name = R.replace(/ /g, "<br>", resource.name);
		let answer = "";

		if (R.isNil(resource.image)) {
			const name = R.replace(/ /g, "\\n", resource.name);
			answer = accum + `${key} [label=\"${name}\"`;
			if (!resource.isBus) {
				answer += `; shape=box`;
			}
			if (resource.color) {
				answer += `; fillcolor=${resource.color}; style=filled`;
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
			if (!resource.isBus) {
				answer += `; shape=box`;
			}
			answer += `];\n`;
		}
		return answer;
	};

	return R.reduce(reduceFunction, "", keys);
};

const generateEdges = (keys, isBusStop) => {
	const reduceFunction1 = (accum1, key1) => {
		const resource = FactorioResource[key1];
		if (isBusStop && resource.isBus) {
			return accum1;
		}
		const reduceFunction2 = (accum2, key2) => {
			return accum2 + `${key2} -> ${key1};\n`;
		};
		const recipes = findRecipes(key1);
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

const getResourceKeys = (resourceKey, isBusStop) => {
	let answer = [resourceKey];
	const resource = FactorioResource[resourceKey];
	if (isBusStop && resource.isBus) {
		return answer;
	}
	const recipes = findRecipes(resourceKey);

	if (recipes) {
		const reduceFunction2 = (accum2, recipe) => {
			if (recipe) {
				const inputKeys = R.uniq(resourceKeys(recipe.inputs));
				const reduceFunction1 = (accum1, key1) => {
					const resource = FactorioResource[key1];
					const keys = getResourceKeys(key1, isBusStop);
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

const HEADER = `digraph {\n`;
const FOOTER = "}\n";

const DotGenerator = {};

DotGenerator.generate = (resourceKeys, flags = {}) => {
	const { isBusBox, isBusStop, isLeafSame, isMapBox, isOrtho } = flags;
	const reduceFunction1 = (accum, key) => accum + `${key}; `;
	let allKeys0 = [];
	let leafString = "";

	if (Array.isArray(resourceKeys)) {
		const reduceFunction2 = (accum, key) =>
			R.uniq(R.concat(accum, getResourceKeys(key, isBusStop)));
		allKeys0 = R.reduce(reduceFunction2, [], resourceKeys);
		leafString = R.reduce(reduceFunction1, "", resourceKeys);
	} else {
		allKeys0 = getResourceKeys(resourceKeys, isBusStop);
		leafString = resourceKeys;
	}
	const allKeys = allKeys0.sort();

	let answer = HEADER;

	if (isOrtho) {
		answer += "splines = ortho;\n";
	}

	if (isMapBox) {
		const mapFilter = (key) => {
			if (!FactorioResource[key]) {
				console.error(`Missing resource for key = :${key}:`);
			}
			return FactorioResource[key].isMap;
		};

		const mapKeys = R.filter(mapFilter, allKeys);
		const mapString = R.reduce(reduceFunction1, "", mapKeys);
		answer += `subgraph cluster_map { label = "Map Resource"; ${mapString}}\n`;
		answer += "\n";
	}

	if (isBusBox) {
		const busFilter = (key) => {
			if (!FactorioResource[key]) {
				console.error(`Missing resource for key = :${key}:`);
			}
			return FactorioResource[key].isBus;
		};

		const busKeys = R.filter(busFilter, allKeys);
		const busString = R.reduce(reduceFunction1, "", busKeys);
		answer += `subgraph cluster_bus { label = "Main Bus"; ${busString}}\n`;
		answer += "\n";
	}

	if (isLeafSame) {
		answer += `{ rank=same; ${leafString}}\n`;
		answer += "\n";
	}

	answer += generateAttributes(allKeys);
	answer += "\n";
	answer += generateEdges(allKeys, isBusStop);
	answer += "\n";
	answer += FOOTER;

	return answer;
};

const generate = (resourceKeys, flags, filename0) => {
	const content = DotGenerator.generate(resourceKeys, flags);
	const filename = filename0 ? filename0 : `${resourceKeys}.dot`;
	FileWriter.writeFile(`dot/${filename}`, content);
};

const allFlags = {
	isBusBox: true,
	isBusStop: true,
	isLeafSame: true,
	isMapBox: true,
	isOrtho: true,
};

// ////////////////////////////////////////////////////////////////////////////
generate("automation_science_pack", allFlags);
generate("logistic_science_pack", allFlags);
generate("military_science_pack", {
	isBusBox: true,
	isBusStop: true,
	isLeafSame: true,
	isOrtho: true,
});
generate("chemical_science_pack", allFlags);
generate("production_science_pack", {
	isBusBox: true,
	isBusStop: true,
	isLeafSame: true,
	isOrtho: true,
});
generate("space_science_pack", allFlags);
generate("utility_science_pack", allFlags);

generate(
	[
		"automation_science_pack",
		"logistic_science_pack",
		"military_science_pack",
		"chemical_science_pack",
		"production_science_pack",
		"space_science_pack",
		"utility_science_pack",
	],
	allFlags,
	"science_packs.dot"
);

// ////////////////////////////////////////////////////////////////////////////
generate(
	[
		"iron_plate",
		"electronic_circuit",
		"advanced_circuit",
		"steel_plate",
		"copper_plate",
	],
	{ isMapBox: true },
	"essentials.dot"
);

// ////////////////////////////////////////////////////////////////////////////
generate(["flying_robot_frame"], allFlags, "flying_robot_frame.dot");

generate(
	[
		"burner_inserter",
		"inserter",
		"long_handed_inserter",
		"fast_inserter",
		"filter_inserter",
		"stack_inserter",
		"stack_filter_inserter",
	],
	{ isBusBox: true, isBusStop: true },
	"inserters.dot"
);

generate(
	[
		"heat_exchanger",
		"heat_pipe",
		"nuclear_reactor",
		"steam_turbine",
		"uranium_235",
		"uranium_238",
	],
	{
		// isBusBox: true,
		isBusStop: true,
		isLeafSame: true,
		isMapBox: true,
		// isOrtho: true,
	},
	"nuclear_power.dot"
);

generate(
	["lubricant", "plastic_bar", "sulfuric_acid"],
	{ isBusBox: true, isLeafSame: true, isMapBox: true, isOrtho: true },
	"oil_processing.dot"
);

generate(["accumulator", "solar_panel"], allFlags, "solar_power.dot");

generate(
	["express_transport_belt", "express_underground_belt", "express_splitter"],
	{
		isBusBox: true,
		isBusStop: true,
		isLeafSame: true,
	},
	"transport_belts.dot"
);

{
	const mapResourceKey = (output) => output.resourceKey;
	const reduceFunction = (accum, recipe) => {
		const outputKeys = R.map(mapResourceKey, recipe.outputs);
		return R.uniq(R.concat(accum, outputKeys));
	};
	const resourceKeys = R.reduce(
		reduceFunction,
		[],
		Object.values(FactorioRecipe)
	);

	generate(resourceKeys, {}, "everything.dot");
}
