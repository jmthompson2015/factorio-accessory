const R = require("ramda");

const FactorioRecipe = require("../artifact/FactorioRecipe.js");
const FactorioResource = require("../artifact/FactorioResource.js");

const mapResourceKey = (input) => input.resourceKey;
const reduceFunction1 = (accum1, recipe) => {
	const inputKeys = R.map(mapResourceKey, recipe.inputs);
	return R.concat(accum1, inputKeys);
};
const resourceKeys = R.reduce(
	reduceFunction1,
	[],
	Object.values(FactorioRecipe)
);
console.log(`resourceKeys.length = ${resourceKeys.length}`);
const reduceFunction2 = (accum2, resourceKey) => {
	const count = R.count((e) => e === resourceKey, resourceKeys);
	return R.assoc(resourceKey, count, accum2);
};
const resourceToCount = R.reduce(reduceFunction2, {}, resourceKeys);
const resourceKeys2 = R.uniq(resourceKeys);
const resourceKeys3 = R.sort(
	(a, b) => resourceToCount[b] - resourceToCount[a],
	resourceKeys2
);
const reduceFunction3 = (accum3, resourceKey) => {
	const count = resourceToCount[resourceKey];
	if (count > 1) {
		return accum3 + `${resourceKey}: ${count}\n`;
	}
	return accum3;
};
const outputString = R.reduce(reduceFunction3, "", resourceKeys3);
console.log(`Resource keys:\n${outputString}`);
