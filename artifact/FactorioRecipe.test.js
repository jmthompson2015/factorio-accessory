import FactorioRecipe from "./FactorioRecipe.js";

QUnit.module("FactorioRecipe");

QUnit.test("required attributes", (assert) => {
  // Setup.
  const recipeKeys = Object.keys(FactorioRecipe);

  // Run / Verify.
  for (let i = 0; i < recipeKeys.length; i += 1) {
    const recipe = FactorioRecipe[recipeKeys[i]];
    assert.ok(recipe.inputs, `recipe.inputs = :${recipe.inputs}:`);
    assert.ok(
      recipe.fabricators,
      `recipe.fabricators = :${recipe.fabricators}:`
    );
    assert.ok(recipe.outputs, `recipe.outputs = :${recipe.outputs}:`);
  }
});

const FactorioRecipeTest = {};
export default FactorioRecipeTest;
