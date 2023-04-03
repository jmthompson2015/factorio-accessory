/* eslint no-console: ["error", { allow: ["info"] }] */

const FactorioFabricator = {
	assembling_machine_1: {
		name: "Assembling Machine 1",
	},
	assembling_machine_2: {
		name: "Assembling Machine 2",
	},
	assembling_machine_3: {
		name: "Assembling Machine 3",
	},
	centrifuge: {
		name: "Centrifuge",
	},
	chemical_plant: {
		name: "Chemical Plant",
	},
	electric_furnace: {
		name: "Electric Furnace",
	},
	engineer: {
		name: "Engineer",
	},
	oil_refinery: {
		name: "Oil Refinery",
	},
	rocket_silo: {
		name: "Rocket Silo",
	},
	steel_furnace: {
		name: "Steel Furnace",
	},
	stone_furnace: {
		name: "Stone Furnace",
	},
};

console.info(`Fabricator count = ${Object.keys(FactorioFabricator).length}`);

module.exports = FactorioFabricator;
