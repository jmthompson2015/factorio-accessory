import FactorioResource from "../artifact/FactorioResource.js";

import ResourceFunction from "./ResourceFunction.js";

QUnit.module("ResourceFunction");

QUnit.test("isBus()", (assert) => {
  // Setup.
  const resourceFunction = new ResourceFunction(FactorioResource);

  // Run / Verify.
  assert.equal(resourceFunction.isBus("accumulator"), false, "accumulator");
  assert.equal(resourceFunction.isBus("battery"), true, "battery");
  assert.equal(resourceFunction.isBus("coal"), true, "coal");
  assert.equal(resourceFunction.isBus("concrete"), false, "concrete");
});

QUnit.test("isMap()", (assert) => {
  // Setup.
  const resourceFunction = new ResourceFunction(FactorioResource);

  // Run / Verify.
  assert.equal(resourceFunction.isMap("accumulator"), false, "accumulator");
  assert.equal(resourceFunction.isMap("battery"), false, "battery");
  assert.equal(resourceFunction.isMap("coal"), true, "coal");
  assert.equal(resourceFunction.isMap("concrete"), false, "concrete");
});

QUnit.test("isRaw()", (assert) => {
  // Setup.
  const resourceFunction = new ResourceFunction(FactorioResource);

  // Run / Verify.
  assert.equal(resourceFunction.isRaw("accumulator"), false, "accumulator");
  assert.equal(resourceFunction.isRaw("battery"), true, "battery");
  assert.equal(resourceFunction.isRaw("coal"), true, "coal");
  assert.equal(resourceFunction.isRaw("concrete"), true, "concrete");
});

QUnit.test("resource() Accumulator", (assert) => {
  // Setup.
  const resourceFunction = new ResourceFunction(FactorioResource);
  const resourceKey = "accumulator";

  // Run.
  const result = resourceFunction.resource(resourceKey);

  // Verify.
  assert.ok(result, `result = ${JSON.stringify(result)}`);
  assert.equal(result.name, "Accumulator");
  assert.equal(result.image, "icons/Accumulator.png");
});

const ResourceFunctionTest = {};
export default ResourceFunctionTest;
