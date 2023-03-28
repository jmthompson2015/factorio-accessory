const R = require("ramda");

const mapResourceKey = (input) => input.resourceKey;

const reduceFunction1 = (accum1, recipe) => {
	const inputKeys = R.map(mapResourceKey, recipe.inputs);
	return R.concat(accum1, inputKeys);
};

const ResourceReport = {};

ResourceReport.rawResourceReport = (myResources) => {
	const resourceKeys2 = Object.keys(myResources);
	const filterFunction = (resourceKey) => {
		return myResources[resourceKey].isRaw;
	};
	const rawKeys = R.filter(filterFunction, resourceKeys2);
	rawKeys.sort();
	const outputString = rawKeys.join("\n");
	console.log(`\nRaw Resource Keys [${rawKeys.length}]:\n${outputString}`);
};

ResourceReport.resourceCountReport = (myRecipes) => {
	const resourceKeys = R.reduce(
		reduceFunction1,
		[],
		Object.values(myRecipes)
	);
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
	console.log(`\nResource Key Count:\n${outputString}`);
};

ResourceReport.ironGearWheelsReport = (myRecipes) => {
	const filterFunction = (recipeKey) => {
		const recipe = myRecipes[recipeKey];
		const inputKeys = R.map(mapResourceKey, recipe.inputs);
		return (
			inputKeys.includes("iron_gear_wheel") &&
			!inputKeys.includes("iron_plate")
		);
	};
	const recipeKeys = R.filter(filterFunction, Object.keys(myRecipes));
	console.log(
		`\nRecipes using Iron Gear Wheel but not Iron Plate:\n${recipeKeys.join(
			"\n"
		)}`
	);
};

module.exports = ResourceReport;
