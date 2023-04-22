import * as R from "../node_modules/ramda/es/index.js";

class RecipeFunction {
	constructor(myRecipes) {
		this._myRecipes = myRecipes;
	}

	get myRecipes() {
		return this._myRecipes;
	}

	accept(recipeKey, visitor) {
		visitor.visit(recipeKey);
	}

	fabricatorKeys(recipeKey) {
		const recipe = this.recipe(recipeKey);

		return recipe ? recipe.fabricators : [];
	}

	findByFabricator(fabricatorKey) {
		const filterFunction = (recipeKey) => {
			const keys = this.fabricatorKeys(recipeKey);
			return keys.includes(fabricatorKey);
		};

		return R.filter(filterFunction, Object.keys(this._myRecipes));
	}

	findByInput(inputKey) {
		const filterFunction = (recipeKey) => {
			const keys = this.inputKeys(recipeKey);
			return keys.includes(inputKey);
		};

		return R.filter(filterFunction, Object.keys(this._myRecipes));
	}

	findByOutput(outputKey) {
		const filterFunction = (recipeKey) => {
			const keys = this.outputKeys(recipeKey);
			return keys.includes(outputKey);
		};

		return R.filter(filterFunction, Object.keys(this._myRecipes));
	}

	inputKeys(recipeKey) {
		const recipe = this.recipe(recipeKey);
		const mapFunction = (input) => input.resourceKey;

		return recipe ? R.map(mapFunction, recipe.inputs) : [];
	}

	outputKeys(recipeKey) {
		const recipe = this.recipe(recipeKey);
		const mapFunction = (output) => output.resourceKey;

		return recipe ? R.map(mapFunction, recipe.outputs) : [];
	}

	recipe(recipeKey) {
		const answer = this._myRecipes[recipeKey];

		if (R.isNil(answer)) {
			console.error(`Missing recipe for key = :${recipeKey}:`);
		}

		return answer;
	}
}

export default RecipeFunction;
