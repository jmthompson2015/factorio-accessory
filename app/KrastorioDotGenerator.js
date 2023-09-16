import * as R from "../node_modules/ramda/es/index.js";

import FileWriter from "../utility/FileWriter.js";

import DotGenerator from "./DotGenerator.js";
import KrastorioRecipe from "../artifact/KrastorioRecipe.js";
import KrastorioResource from "../artifact/KrastorioResource.js";

import RecipeFunction from "../model/RecipeFunction.js";
import ResourceFunction from "../model/ResourceFunction.js";

const recipeFunction = new RecipeFunction(KrastorioRecipe);
const resourceFunction = new ResourceFunction(KrastorioResource);
const dotGenerator = new DotGenerator(recipeFunction, resourceFunction);

const generate = (resourceKeys, flags, filename0) => {
	const content = dotGenerator.generate(resourceKeys, flags);
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

generate(
	[
		"production_tech_card",
		"utility_tech_card",
		"optimization_tech_card",
		"matter_tech_card",
		"advanced_tech_card",
		"singularity_tech_card",
	],
	{ isLeafSame: true },
	"tech_cards_end_game.dot"
);

// ////////////////////////////////////////////////////////////////////////////
{
	const maRecipeKeys = recipeFunction.findByFabricator("matter_assembler");
	generate(maRecipeKeys, {}, "matter_assembler.dot");
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
	const recipeKeys = Object.keys(KrastorioRecipe);
	generate(recipeKeys, {}, "everything.dot");
}
