import FactorioRecipe from "../artifact/FactorioRecipe.js";

import RecipeFunction from "./RecipeFunction.js";

QUnit.module("RecipeFunction");

QUnit.test("fabricatorKeys() Accumulator", (assert) => {
  // Setup.
  const recipeFunction = new RecipeFunction(FactorioRecipe);
  const recipeKey = "accumulator";

  // Run.
  const result = recipeFunction.fabricatorKeys(recipeKey);

  // Verify.
  assert.ok(result, `result = ${JSON.stringify(result)}`);
  assert.equal(result.length, 4);

  const headKey = R.head(result);
  assert.ok(headKey, `headKey = ${headKey}`);
  assert.equal(headKey, "assembling_machine_1");

  const lastKey = R.last(result);
  assert.ok(lastKey, `lastKey = ${lastKey}`);
  assert.equal(lastKey, "engineer");
});

QUnit.test("findByFabricator() Engineer", (assert) => {
  // Setup.
  const recipeFunction = new RecipeFunction(FactorioRecipe);
  const fabricatorKey = "engineer";

  // Run.
  const result = recipeFunction.findByFabricator(fabricatorKey);

  // Verify.
  assert.ok(result, `result = ${JSON.stringify(result)}`);
  assert.equal(result.length, 64);

  const headKey = R.head(result);
  assert.ok(headKey, `headKey = ${headKey}`);
  assert.equal(headKey, "accumulator");

  const lastKey = R.last(result);
  assert.ok(lastKey, `lastKey = ${lastKey}`);
  assert.equal(lastKey, "wall");
});

QUnit.test("findByInput() Battery", (assert) => {
  // Setup.
  const recipeFunction = new RecipeFunction(FactorioRecipe);
  const resourceKey = "battery";

  // Run.
  const result = recipeFunction.findByInput(resourceKey);

  // Verify.
  assert.ok(result, `result = ${JSON.stringify(result)}`);
  assert.equal(result.length, 2);

  const headKey = R.head(result);
  assert.ok(headKey, `headKey = ${headKey}`);
  assert.equal(headKey, "accumulator");

  const lastKey = R.last(result);
  assert.ok(lastKey, `lastKey = ${lastKey}`);
  assert.equal(lastKey, "flying_robot_frame");
});

QUnit.test("findByOutput() Accumulator", (assert) => {
  // Setup.
  const recipeFunction = new RecipeFunction(FactorioRecipe);
  const resourceKey = "accumulator";

  // Run.
  const result = recipeFunction.findByOutput(resourceKey);

  // Verify.
  assert.ok(result, `result = ${JSON.stringify(result)}`);
  assert.equal(result.length, 1);

  const headKey = R.head(result);
  assert.ok(headKey, `headKey = ${headKey}`);
  assert.equal(headKey, "accumulator");
});

QUnit.test("inputKeys() Accumulator", (assert) => {
  // Setup.
  const recipeFunction = new RecipeFunction(FactorioRecipe);
  const recipeKey = "accumulator";

  // Run.
  const result = recipeFunction.inputKeys(recipeKey);

  // Verify.
  assert.ok(result, `result = ${JSON.stringify(result)}`);
  assert.equal(result.length, 2);

  const headKey = R.head(result);
  assert.ok(headKey, `headKey = ${headKey}`);
  assert.equal(headKey, "battery");

  const lastKey = R.last(result);
  assert.ok(lastKey, `lastKey = ${lastKey}`);
  assert.equal(lastKey, "iron_plate");
});

QUnit.test("outputKeys() Electronic Circuit", (assert) => {
  // Setup.
  const recipeFunction = new RecipeFunction(FactorioRecipe);
  const recipeKey = "electronic_circuit";

  // Run.
  const result = recipeFunction.outputKeys(recipeKey);

  // Verify.
  assert.ok(result, `result = ${JSON.stringify(result)}`);
  assert.equal(result.length, 1);

  const headKey = R.head(result);
  assert.ok(headKey, `headKey = ${headKey}`);
  assert.equal(headKey, "electronic_circuit");
});

QUnit.test("recipe() Accumulator", (assert) => {
  // Setup.
  const recipeFunction = new RecipeFunction(FactorioRecipe);
  const recipeKey = "accumulator";

  // Run.
  const result = recipeFunction.recipe(recipeKey);

  // Verify.
  assert.ok(result, `result = ${JSON.stringify(result)}`);
  assert.equal(result.inputs.length, 2);
  assert.equal(result.fabricators.length, 4);
  assert.equal(result.outputs.length, 1);
});

QUnit.test("visitor depth first", (assert) => {
  // Setup.
  const recipeFunction = new RecipeFunction(FactorioRecipe);
  const recipeKey = "accumulator";
  let result = [];

  const visitor = {};
  visitor.visit = (recipeKey) => {
    const inputKeys = recipeFunction.inputKeys(recipeKey);
    if (inputKeys) {
      R.forEach((key) => {
        result = R.append(key, result);
        recipeFunction.accept(key, visitor);
      }, inputKeys);
    }
  };

  // Run.
  recipeFunction.accept(recipeKey, visitor);

  // Verify.
  assert.ok(result, `result = ${JSON.stringify(result)}`);
  assert.equal(result.length, 14, `result.length = ${result.length}`);
  const head = R.head(result);
  assert.equal(head, "battery", `head = ${head}`);
  const last = R.last(result);
  assert.equal(last, "iron_ore", `last = ${last}`);
});

const RecipeFunctionTest = {};
export default RecipeFunctionTest;
