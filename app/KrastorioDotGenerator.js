const R = require("ramda");

const FileWriter = require("../utility/FileWriter.js");

const DotGenerator = require("./DotGenerator.js");
const KrastorioRecipe = require("../artifact/KrastorioRecipe.js");
const KrastorioResource = require("../artifact/KrastorioResource.js");

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
		"advanced_transport_belt",
		"advanced_underground_belt",
		"advanced_splitter",
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