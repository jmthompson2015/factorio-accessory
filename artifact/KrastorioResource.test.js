import KrastorioResource from "./KrastorioResource.js";

QUnit.module("KrastorioResource");

QUnit.test("required attributes", (assert) => {
  // Setup.
  const resourceKeys = Object.keys(KrastorioResource);

  // Run / Verify.
  for (let i = 0; i < resourceKeys.length; i += 1) {
    const resource = KrastorioResource[resourceKeys[i]];
    assert.ok(resource.name, `resource.name = :${resource.name}:`);
    assert.ok(resource.image, `resource.image = :${resource.image}:`);
  }
});

const KrastorioResourceTest = {};
export default KrastorioResourceTest;
