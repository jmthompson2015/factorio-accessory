import FactorioResource from "./FactorioResource.js";

QUnit.module("FactorioResource");

QUnit.test("required attributes", (assert) => {
  // Setup.
  const resourceKeys = Object.keys(FactorioResource);

  // Run / Verify.
  for (let i = 0; i < resourceKeys.length; i += 1) {
    const resource = FactorioResource[resourceKeys[i]];
    assert.ok(resource.name, `resource.name = :${resource.name}:`);
    assert.ok(resource.image, `resource.image = :${resource.image}:`);
  }
});

const FactorioResourceTest = {};
export default FactorioResourceTest;
