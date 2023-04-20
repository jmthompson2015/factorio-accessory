import * as R from "ramda";

import FileWriter from "../utility/FileWriter.js";

import DotGenerator from "./DotGenerator.js";
import KrastorioRecipe from "../artifact/KrastorioRecipe.js";
import KrastorioResource from "../artifact/KrastorioResource.js";

const generate = (resourceKeys, flags, filename0) => {
	const content = DotGenerator.generate(
		KrastorioRecipe,
		KrastorioResource,
		resourceKeys,
		flags
	);
	const filename = filename0 ? filename0 : `${resourceKeys}.dot`;
	FileWriter.writeFile(`dot/krastorio/${filename}`, content);
};

const allFlags = {
	isBusBox: true,
	isBusStop: true,
	isLeafSame: true,
	isMapBox: true,
	isOrtho: true,
	isRawBox: true,
	isRawStop: true,
};

// ////////////////////////////////////////////////////////////////////////////
const techFlags = {};
generate("basic_tech_card", techFlags);
generate("automation_tech_card", techFlags);
generate("logistic_tech_card", techFlags);
generate("military_tech_card", techFlags);
generate("chemical_tech_card", techFlags);
generate("production_tech_card", techFlags);
generate("utility_tech_card", techFlags);
generate("optimization_tech_card", techFlags);
generate("matter_tech_card", techFlags);
generate("advanced_tech_card", techFlags);
generate("singularity_tech_card", techFlags);

// ////////////////////////////////////////////////////////////////////////////
{
	const filterFunction = (recipeKey) => {
		const recipe = KrastorioRecipe[recipeKey];
		return recipe.fabricators.includes("matter_assembler");
	};
	const maRecipeKeys = R.filter(filterFunction, Object.keys(KrastorioRecipe));
	const mapResourceKey = (output) => output.resourceKey;
	const reduceFunction = (accum, recipeKey) => {
		const recipe = KrastorioRecipe[recipeKey];
		const outputKeys = R.map(mapResourceKey, recipe.outputs);
		return R.uniq(R.concat(accum, outputKeys));
	};
	const resourceKeys = R.reduce(reduceFunction, [], maRecipeKeys);

	generate(resourceKeys, {}, "matter_assembler.dot");
}

generate(
	[
		"advanced_transport_belt",
		"advanced_underground_belt",
		"advanced_splitter",
		"superior_transport_belt",
		"superior_underground_belt",
		"superior_splitter",
	],
	{ isRawStop: true },
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
		Object.values(KrastorioRecipe)
	);

	generate(resourceKeys, {}, "everything.dot");
}
