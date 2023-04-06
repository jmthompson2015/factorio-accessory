/* eslint no-console: ["error", { allow: ["info"] }] */

const KrastorioFabricator = {
	advanced_assembling_machine: {
		name: "Advanced Assembling Machine",
	},
	advanced_chemical_plant: {
		name: "Advanced Chemical Plant",
	},
	advanced_furnace: {
		name: "Advanced Furnace",
	},
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
	crusher: {
		name: "Crusher",
	},
	damaged_ship_assembler: {
		name: "Damaged Ship Assembler",
	},
	electric_furnace: {
		name: "Electric Furnace",
	},
	electrolysis_plant: {
		name: "Electrolysis Plant",
	},
	engineer: {
		name: "Engineer",
	},
	filtration_plant: {
		name: "Filtration Plant",
	},
	fuel_refinery: {
		name: "Fuel Refinery",
	},
	greenhouse:{
		name: "Greenhouse",
	}
	oil_refinery: {
		name: "Oil Refinery",
	},
	quantum_computer: {
		name: "Quantum Computer",
	},
	research_server: {
		name: "Research Server",
	},
	rocket_silo: {
		name: "Rocket Silo",
	},
	stabilizer_charging_station: {
		name: "Stabilizer Charging Station",
	},
	steel_furnace: {
		name: "Steel Furnace",
	},
	stone_furnace: {
		name: "Stone Furnace",
	},
};

console.info(
	`Krastorio Fabricator count = ${Object.keys(KrastorioFabricator).length}`
);

export default KrastorioFabricator;
