import * as R from "ramda";

import FileWriter from "../utility/FileWriter.js";

import DotGenerator from "./DotGenerator.js";
import KrastorioRecipe from "../artifact/KrastorioRecipe.js";
import KrastorioResource from "../artifact/KrastorioResource.js";

import RecipeFunction from "../model/RecipeFunction.js";
import ResourceFunction from "../model/ResourceFunction.js";

const recipeFunction = new RecipeFunction(KrastorioRecipe);
const resourceFunction = new ResourceFunction(KrastorioResource);

const generate = (resourceKeys, flags, filename0) => {
	const content = DotGenerator.generate(
		recipeFunction,
		resourceFunction,
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
	const maRecipeKeys = recipeFunction.findByFabricator("matter_assembler");
	const reduceFunction = (accum, recipeKey) => {
		const outputKeys = recipeFunction.outputKeys(recipeKey);
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
	const reduceFunction = (accum, recipeKey) => {
		const outputKeys = recipeFunction.outputKeys(recipeKey);
		return R.uniq(R.concat(accum, outputKeys));
	};
	const resourceKeys = R.reduce(
		reduceFunction,
		[],
		Object.keys(KrastorioRecipe)
	);

	generate(resourceKeys, {}, "everything.dot");
}
