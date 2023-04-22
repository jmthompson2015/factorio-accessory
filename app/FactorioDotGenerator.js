import * as R from "../node_modules/ramda/es/index.js";

import FileWriter from "../utility/FileWriter.js";

import DotGenerator from "./DotGenerator.js";
import FactorioRecipe from "../artifact/FactorioRecipe.js";
import FactorioResource from "../artifact/FactorioResource.js";

import RecipeFunction from "../model/RecipeFunction.js";
import ResourceFunction from "../model/ResourceFunction.js";

const recipeFunction = new RecipeFunction(FactorioRecipe);
const resourceFunction = new ResourceFunction(FactorioResource);
const dotGenerator = new DotGenerator(recipeFunction, resourceFunction);

const generate = (resourceKeys, flags, filename0) => {
	const content = dotGenerator.generate(resourceKeys, flags);
	const filename = filename0 ? filename0 : `${resourceKeys}.dot`;
	FileWriter.writeFile(`dot/${filename}`, content);
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
const scienceFlags = {
	isLeafSame: true,
	isMapBox: true,
};
generate("automation_science_pack", scienceFlags);
generate("logistic_science_pack", scienceFlags);
generate("military_science_pack", scienceFlags);
generate("chemical_science_pack", scienceFlags);
generate("production_science_pack", scienceFlags);
generate("space_science_pack", scienceFlags);
generate("utility_science_pack", scienceFlags);

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
	scienceFlags,
	"science_packs.dot"
);

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
	{ isRawStop: true },
	"science_packs2.dot"
);

// ////////////////////////////////////////////////////////////////////////////
generate(
	["electronic_circuit", "advanced_circuit", "steel_plate"],
	{ isRawBox: true },
	"essentials.dot"
);

// ////////////////////////////////////////////////////////////////////////////
generate(
	["flying_robot_frame"],
	{
		isLeafSame: true,
		isRawBox: true,
		isRawStop: true,
	},
	"flying_robot_frame.dot"
);

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
	{
		isRawBox: true,
		isRawStop: true,
	},
	"inserters.dot"
);

generate(
	[
		"heat_exchanger",
		"heat_pipe",
		"nuclear_reactor",
		"steam_turbine",
		"uranium_processing",
	],
	{
		isLeafSame: true,
		isRawBox: true,
		isRawStop: true,
	},
	"nuclear_power.dot"
);

generate(
	["lubricant", "plastic_bar", "sulfuric_acid"],
	{
		isLeafSame: true,
		isRawBox: true,
	},
	"oil_processing.dot"
);

generate(
	["accumulator", "solar_panel"],
	{
		isRawBox: true,
		isRawStop: true,
	},
	"solar_power.dot"
);

generate(
	[
		"transport_belt",
		"underground_belt",
		"splitter",
		"fast_transport_belt",
		"fast_underground_belt",
		"fast_splitter",
		"express_transport_belt",
		"express_underground_belt",
		"express_splitter",
	],
	{ isBusStop: true },
	"transport_belts.dot"
);

{
	const recipeKeys = Object.keys(FactorioRecipe);

	generate(recipeKeys, {}, "everything.dot");
}
