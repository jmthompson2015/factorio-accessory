import KrastorioRecipe from "./KrastorioRecipe.js";

QUnit.module("KrastorioRecipe");

QUnit.test("required attributes", (assert) => {
  // Setup.
  const recipeKeys = Object.keys(KrastorioRecipe);

  // Run / Verify.
  for (let i = 0; i < recipeKeys.length; i += 1) {
    const recipe = KrastorioRecipe[recipeKeys[i]];
    assert.ok(recipe.inputs, `recipe.inputs = :${recipe.inputs}:`);
    assert.ok(
      recipe.fabricators,
      `recipe.fabricators = :${recipe.fabricators}:`
    );
    assert.ok(recipe.outputs, `recipe.outputs = :${recipe.outputs}:`);
  }
});

const KrastorioRecipeTest = {};
export default KrastorioRecipeTest;
