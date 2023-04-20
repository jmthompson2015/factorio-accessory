import * as R from "../node_modules/ramda/es/index.js";

const isRaw = (resource) =>
	resource.clientProps ? resource.clientProps.isRaw : resource.isRaw;

const mapResourceKey = (input) => input.resourceKey;

const findRecipes = (myRecipes, outputKey) => {
	const filterFunction = (recipeKey) => {
		const recipe = myRecipes[recipeKey];
		const outputKeys = R.map(mapResourceKey, recipe.outputs);
		return outputKeys.includes(outputKey);
	};
	return R.filter(filterFunction, Object.keys(myRecipes));
};

const reduceFunction1 = (accum1, recipe) => {
	const inputKeys = R.map(mapResourceKey, recipe.inputs);
	return R.concat(accum1, inputKeys);
};

const ResourceReport = {};

ResourceReport.hasRawFlag = (myRecipes, myResources) => {
	const resourceKeys = Object.keys(myResources);
	const filterFunction = (resourceKey) => {
		const resource = myResources[resourceKey];
		return isRaw(resource);
	};
	const rawResourceKeys = R.filter(filterFunction, resourceKeys);

	const reduceFunction = (accum, resourceKey) => {
		const recipeKeys = findRecipes(myRecipes, resourceKey);
		const filterFunction2 = (recipeKey) => {
			const fabricators = myRecipes[recipeKey].fabricators;
			return fabricators ? fabricators.includes("engineer") : false;
		};
		return R.uniq(R.concat(accum, R.filter(filterFunction2, recipeKeys)));
	};
	const flaggedResourceKeys = R.reduce(reduceFunction, [], rawResourceKeys);
	flaggedResourceKeys.sort();
	const outputString = flaggedResourceKeys.join("\n");
	console.log(
		`\nResource Keys badly flagged raw [${flaggedResourceKeys.length}]:\n${outputString}`
	);
};

ResourceReport.missingFabricators = (myRecipes) => {
	const recipeKeys = Object.keys(myRecipes);
	const filterFunction = (recipeKey) => {
		return R.isNil(myRecipes[recipeKey].fabricators);
	};
	const fabKeys = R.filter(filterFunction, recipeKeys);
	fabKeys.sort();
	const outputString = fabKeys.join("\n");
	console.log(
		`\nRecipe Keys missing fabricators [${fabKeys.length}]:\n${outputString}`
	);
};

ResourceReport.missingRawFlag = (myRecipes, myResources) => {
	const recipeKeys = Object.keys(myRecipes);
	const filterFunction = (recipeKey) => {
		const fabricators = myRecipes[recipeKey].fabricators;
		return fabricators ? !fabricators.includes("engineer") : false;
	};
	const rawRecipeKeys = R.filter(filterFunction, recipeKeys);

	const mapOutputKey = (output) => output.resourceKey;
	const reduceFunction1 = (accum, recipeKey) => {
		const recipe = myRecipes[recipeKey];
		const outputKeys = R.map(mapOutputKey, recipe.outputs);
		return R.uniq(R.concat(accum, outputKeys));
	};
	const rawResourceKeys = R.reduce(reduceFunction1, [], rawRecipeKeys);

	const reduceFunction2 = (accum, resourceKey) => {
		const resource = myResources[resourceKey];
		if (R.isNil(resource)) {
			console.error(`Missing resource for key :${resourceKey}:`);
		}
		if (R.isNil(isRaw(resource))) {
			return R.uniq(R.append(resourceKey, accum));
		}
		return accum;
	};
	const unflaggedResourceKeys = R.reduce(
		reduceFunction2,
		[],
		rawResourceKeys
	);
	unflaggedResourceKeys.sort();
	const outputString = unflaggedResourceKeys.join("\n");
	console.log(
		`\nResource Keys without isRaw [${unflaggedResourceKeys.length}]:\n${outputString}`
	);
};

ResourceReport.rawResourceReport = (myResources) => {
	const resourceKeys2 = Object.keys(myResources);
	const filterFunction = (resourceKey) => {
		return isRaw(myResources[resourceKey]);
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

export default ResourceReport;
