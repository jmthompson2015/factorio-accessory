import FactorioRecipe from "../artifact/FactorioRecipe.js";
import FactorioResource from "../artifact/FactorioResource.js";

import RecipeFunction from "./RecipeFunction.js";
import ResourceFunction from "./ResourceFunction.js";
import ResourceKeyVisitor from "./ResourceKeyVisitor.js";

QUnit.module("ResourceKeyVisitor");

QUnit.test("visit() Accumulator", (assert) => {
  // Setup.
  const recipeKey = "accumulator";
  const recipeFunction = new RecipeFunction(FactorioRecipe);
  const isBusStop = false;
  const isRawStop = false;
  const resourceFunction = new ResourceFunction(FactorioResource);
  const visitor = new ResourceKeyVisitor(
    recipeFunction,
    resourceFunction,
    isBusStop,
    isRawStop
  );

  // Run.
  recipeFunction.accept(recipeKey, visitor);
  const result = visitor.result;

  // Verify.
  assert.ok(result, `result = ${JSON.stringify(result)}`);
  assert.equal(result.length, 10, `result.length = ${result.length}`);
  const head = R.head(result);
  assert.equal(head, "battery", `head = ${head}`);
  const last = R.last(result);
  assert.equal(last, "water", `last = ${last}`);
});

QUnit.test("visit() Accumulator bus stop", (assert) => {
  // Setup.
  const recipeKey = "accumulator";
  const recipeFunction = new RecipeFunction(FactorioRecipe);
  const isBusStop = true;
  const isRawStop = false;
  const resourceFunction = new ResourceFunction(FactorioResource);
  const visitor = new ResourceKeyVisitor(
    recipeFunction,
    resourceFunction,
    isBusStop,
    isRawStop
  );

  // Run.
  recipeFunction.accept(recipeKey, visitor);
  const result = visitor.result;

  // Verify.
  assert.ok(result, `result = ${JSON.stringify(result)}`);
  assert.equal(result.length, 2, `result.length = ${result.length}`);
  const head = R.head(result);
  assert.equal(head, "battery", `head = ${head}`);
  const last = R.last(result);
  assert.equal(last, "iron_plate", `last = ${last}`);
});

QUnit.test("visit() Accumulator raw stop", (assert) => {
  // Setup.
  const recipeKey = "accumulator";
  const recipeFunction = new RecipeFunction(FactorioRecipe);
  const isBusStop = false;
  const isRawStop = true;
  const resourceFunction = new ResourceFunction(FactorioResource);
  const visitor = new ResourceKeyVisitor(
    recipeFunction,
    resourceFunction,
    isBusStop,
    isRawStop
  );

  // Run.
  recipeFunction.accept(recipeKey, visitor);
  const result = visitor.result;

  // Verify.
  assert.ok(result, `result = ${JSON.stringify(result)}`);
  assert.equal(result.length, 2, `result.length = ${result.length}`);
  const head = R.head(result);
  assert.equal(head, "battery", `head = ${head}`);
  const last = R.last(result);
  assert.equal(last, "iron_plate", `last = ${last}`);
});

const ResourceKeyVisitorTest = {};
export default ResourceKeyVisitorTest;
