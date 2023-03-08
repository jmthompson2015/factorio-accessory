/* eslint no-console: ["error", { allow: ["info"] }] */

const FactorioRecipe = {
	accumulator: {
		inputs: [
			{ amount: 5, resourceKey: "battery" },
			{ amount: 2, resourceKey: "iron_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "accumulator" }],
	},
	advanced_circuit: {
		inputs: [
			{ amount: 4, resourceKey: "copper_cable" },
			{ amount: 2, resourceKey: "electronic_circuit" },
			{ amount: 2, resourceKey: "plastic_bar" },
		],
		outputs: [{ amount: 1, resourceKey: "advanced_circuit" }],
	},
	advanced_oil_processing: {
		inputs: [
			{ amount: 100, resourceKey: "crude_oil" },
			{ amount: 50, resourceKey: "water" },
		],
		outputs: [
			{ amount: 25, resourceKey: "heavy_oil" },
			{ amount: 45, resourceKey: "light_oil" },
			{ amount: 55, resourceKey: "petroleum_gas" },
		],
	},
	assembling_machine_1: {
		inputs: [
			{ amount: 3, resourceKey: "electronic_circuit" },
			{ amount: 5, resourceKey: "iron_gear_wheel" },
			{ amount: 9, resourceKey: "iron_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "assembling_machine_1" }],
	},
	assembling_machine_2: {
		inputs: [
			{ amount: 1, resourceKey: "assembling_machine_1" },
			{ amount: 3, resourceKey: "electronic_circuit" },
			{ amount: 5, resourceKey: "iron_gear_wheel" },
			{ amount: 2, resourceKey: "steel_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "assembling_machine_2" }],
	},
	assembling_machine_3: {
		inputs: [
			{ amount: 2, resourceKey: "assembling_machine_2" },
			{ amount: 4, resourceKey: "speed_module_1" },
		],
		outputs: [{ amount: 1, resourceKey: "assembling_machine_3" }],
	},
	automation_science_pack: {
		inputs: [
			{ amount: 1, resourceKey: "copper_plate" },
			{ amount: 1, resourceKey: "iron_gear_wheel" },
		],
		outputs: [{ amount: 1, resourceKey: "automation_science_pack" }],
	},
	battery: {
		inputs: [
			{ amount: 1, resourceKey: "copper_plate" },
			{ amount: 1, resourceKey: "iron_plate" },
			{ amount: 20, resourceKey: "sulfuric_acid" },
		],
		outputs: [{ amount: 1, resourceKey: "battery" }],
	},
	burner_inserter: {
		inputs: [
			{ amount: 1, resourceKey: "iron_gear_wheel" },
			{ amount: 1, resourceKey: "iron_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "burner_inserter" }],
	},
	burner_mining_drill: {
		inputs: [
			{ amount: 3, resourceKey: "iron_gear_wheel" },
			{ amount: 3, resourceKey: "iron_plate" },
			{ amount: 1, resourceKey: "stone_furnace" },
		],
		outputs: [{ amount: 1, resourceKey: "burner_mining_drill" }],
	},
	cargo_wagon: {
		inputs: [
			{ amount: 10, resourceKey: "iron_gear_wheel" },
			{ amount: 20, resourceKey: "iron_plate" },
			{ amount: 20, resourceKey: "steel_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "cargo_wagon" }],
	},
	chemical_science_pack: {
		inputs: [
			{ amount: 3, resourceKey: "advanced_circuit" },
			{ amount: 2, resourceKey: "engine_unit" },
			{ amount: 1, resourceKey: "sulfur" },
		],
		outputs: [{ amount: 2, resourceKey: "chemical_science_pack" }],
	},
	concrete: {
		inputs: [
			{ amount: 1, resourceKey: "iron_ore" },
			{ amount: 5, resourceKey: "stone_brick" },
			{ amount: 100, resourceKey: "water" },
		],
		outputs: [{ amount: 10, resourceKey: "concrete" }],
	},
	copper_cable: {
		inputs: [{ amount: 1, resourceKey: "copper_plate" }],
		outputs: [{ amount: 2, resourceKey: "copper_cable" }],
	},
	copper_plate: {
		inputs: [{ amount: 1, resourceKey: "copper_ore" }],
		outputs: [{ amount: 1, resourceKey: "copper_plate" }],
	},
	efficiency_module_1: {
		inputs: [
			{ amount: 5, resourceKey: "advanced_circuit" },
			{ amount: 5, resourceKey: "electronic_circuit" },
		],
		outputs: [{ amount: 1, resourceKey: "efficiency_module_1" }],
	},
	efficiency_module_2: {
		inputs: [
			{ amount: 5, resourceKey: "advanced_circuit" },
			{ amount: 4, resourceKey: "efficiency_module_1" },
			{ amount: 5, resourceKey: "processing_unit" },
		],
		outputs: [{ amount: 1, resourceKey: "efficiency_module_2" }],
	},
	efficiency_module_3: {
		inputs: [
			{ amount: 5, resourceKey: "advanced_circuit" },
			{ amount: 5, resourceKey: "efficiency_module_2" },
			{ amount: 5, resourceKey: "processing_unit" },
		],
		outputs: [{ amount: 1, resourceKey: "efficiency_module_3" }],
	},
	electric_engine_unit: {
		inputs: [
			{ amount: 2, resourceKey: "electronic_circuit" },
			{ amount: 1, resourceKey: "engine_unit" },
			{ amount: 15, resourceKey: "lubricant" },
		],
		outputs: [{ amount: 1, resourceKey: "electric_engine_unit" }],
	},
	electric_furnace: {
		inputs: [
			{ amount: 5, resourceKey: "advanced_circuit" },
			{ amount: 10, resourceKey: "steel_plate" },
			{ amount: 10, resourceKey: "stone_brick" },
		],
		outputs: [{ amount: 1, resourceKey: "electric_furnace" }],
	},
	electric_mining_drill: {
		inputs: [
			{ amount: 3, resourceKey: "electronic_circuit" },
			{ amount: 5, resourceKey: "iron_gear_wheel" },
			{ amount: 10, resourceKey: "iron_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "electric_mining_drill" }],
	},
	electronic_circuit: {
		inputs: [
			{ amount: 3, resourceKey: "copper_cable" },
			{ amount: 1, resourceKey: "iron_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "electronic_circuit" }],
	},
	engine_unit: {
		inputs: [
			{ amount: 1, resourceKey: "iron_gear_wheel" },
			{ amount: 2, resourceKey: "pipe" },
			{ amount: 1, resourceKey: "steel_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "engine_unit" }],
	},
	express_splitter: {
		inputs: [
			{ amount: 10, resourceKey: "advanced_circuit" },
			{ amount: 1, resourceKey: "fast_splitter" },
			{ amount: 10, resourceKey: "iron_gear_wheel" },
			{ amount: 80, resourceKey: "lubricant" },
		],
		outputs: [{ amount: 1, resourceKey: "express_splitter" }],
	},
	express_transport_belt: {
		inputs: [
			{ amount: 1, resourceKey: "fast_transport_belt" },
			{ amount: 10, resourceKey: "iron_gear_wheel" },
			{ amount: 20, resourceKey: "lubricant" },
		],
		outputs: [{ amount: 1, resourceKey: "express_transport_belt" }],
	},
	express_underground_belt: {
		inputs: [
			{ amount: 2, resourceKey: "fast_underground_belt" },
			{ amount: 80, resourceKey: "iron_gear_wheel" },
			{ amount: 40, resourceKey: "lubricant" },
		],
		outputs: [{ amount: 2, resourceKey: "express_underground_belt" }],
	},
	fast_inserter: {
		inputs: [
			{ amount: 2, resourceKey: "electronic_circuit" },
			{ amount: 1, resourceKey: "inserter" },
			{ amount: 2, resourceKey: "iron_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "fast_inserter" }],
	},
	fast_splitter: {
		inputs: [
			{ amount: 10, resourceKey: "electronic_circuit" },
			{ amount: 10, resourceKey: "iron_gear_wheel" },
			{ amount: 1, resourceKey: "splitter" },
		],
		outputs: [{ amount: 1, resourceKey: "fast_splitter" }],
	},
	fast_transport_belt: {
		inputs: [
			{ amount: 5, resourceKey: "iron_gear_wheel" },
			{ amount: 1, resourceKey: "transport_belt" },
		],
		outputs: [{ amount: 1, resourceKey: "fast_transport_belt" }],
	},
	fast_underground_belt: {
		inputs: [
			{ amount: 40, resourceKey: "iron_gear_wheel" },
			{ amount: 2, resourceKey: "underground_belt" },
		],
		outputs: [{ amount: 2, resourceKey: "fast_underground_belt" }],
	},
	filter_inserter: {
		inputs: [
			{ amount: 4, resourceKey: "electronic_circuit" },
			{ amount: 1, resourceKey: "fast_inserter" },
		],
		outputs: [{ amount: 1, resourceKey: "filter_inserter" }],
	},
	firearm_magazine: {
		inputs: [{ amount: 4, resourceKey: "iron_plate" }],
		outputs: [{ amount: 1, resourceKey: "firearm_magazine" }],
	},
	fluid_wagon: {
		inputs: [
			{ amount: 10, resourceKey: "iron_gear_wheel" },
			{ amount: 8, resourceKey: "pipe" },
			{ amount: 16, resourceKey: "steel_plate" },
			{ amount: 1, resourceKey: "storage_tank" },
		],
		outputs: [{ amount: 1, resourceKey: "fluid_wagon" }],
	},
	flying_robot_frame: {
		inputs: [
			{ amount: 2, resourceKey: "battery" },
			{ amount: 1, resourceKey: "electric_engine_unit" },
			{ amount: 3, resourceKey: "electronic_circuit" },
			{ amount: 1, resourceKey: "steel_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "flying_robot_frame" }],
	},
	grenade: {
		inputs: [
			{ amount: 10, resourceKey: "coal" },
			{ amount: 5, resourceKey: "iron_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "grenade" }],
	},
	inserter: {
		inputs: [
			{ amount: 1, resourceKey: "electronic_circuit" },
			{ amount: 1, resourceKey: "iron_gear_wheel" },
			{ amount: 1, resourceKey: "iron_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "inserter" }],
	},
	iron_gear_wheel: {
		inputs: [{ amount: 2, resourceKey: "iron_plate" }],
		outputs: [{ resourceKey: "iron_gear_wheel" }],
	},
	iron_plate: {
		inputs: [{ amount: 1, resourceKey: "iron_ore" }],
		outputs: [{ amount: 1, resourceKey: "iron_plate" }],
	},
	iron_stick: {
		inputs: [{ amount: 1, resourceKey: "iron_plate" }],
		outputs: [{ amount: 2, resourceKey: "iron_stick" }],
	},
	lab: {
		inputs: [
			{ amount: 10, resourceKey: "electronic_circuit" },
			{ amount: 10, resourceKey: "iron_gear_wheel" },
			{ amount: 4, resourceKey: "transport_belt" },
		],
		outputs: [{ amount: 1, resourceKey: "lab" }],
	},
	// light_oil: {
	// 	inputs: [
	// 		{ amount: 40, resourceKey: "heavy_oil" },
	// 		{ amount: 30, resourceKey: "water" },
	// 	],
	// 	outputs: [{ amount: 1, resourceKey: "light_oil" }],
	// },
	logistic_science_pack: {
		inputs: [
			{ amount: 1, resourceKey: "inserter" },
			{ amount: 1, resourceKey: "transport_belt" },
		],
		outputs: [{ amount: 1, resourceKey: "logistic_science_pack" }],
	},
	long_handed_inserter: {
		inputs: [
			{ amount: 1, resourceKey: "inserter" },
			{ amount: 1, resourceKey: "iron_gear_wheel" },
			{ amount: 1, resourceKey: "iron_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "long_handed_inserter" }],
	},
	low_density_structure: {
		inputs: [
			{ amount: 20, resourceKey: "copper_plate" },
			{ amount: 5, resourceKey: "plastic_bar" },
			{ amount: 2, resourceKey: "steel_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "low_density_structure" }],
	},
	lubricant: {
		inputs: [{ amount: 10, resourceKey: "heavy_oil" }],
		outputs: [{ amount: 1, resourceKey: "lubricant" }],
	},
	military_science_pack: {
		inputs: [
			{ amount: 1, resourceKey: "grenade" },
			{ amount: 1, resourceKey: "piercing_rounds_magazine" },
			{ amount: 1, resourceKey: "wall" },
		],
		outputs: [{ amount: 2, resourceKey: "military_science_pack" }],
	},
	// petroleum_gas: {
	// 	inputs: [
	// 		{ amount: 30, resourceKey: "light_oil" },
	// 		{ amount: 30, resourceKey: "water" },
	// 	],
	// 	outputs: [{ amount: 1, resourceKey: "petroleum_gas" }],
	// },
	piercing_rounds_magazine: {
		inputs: [
			{ amount: 5, resourceKey: "copper_plate" },
			{ amount: 1, resourceKey: "firearm_magazine" },
			{ amount: 1, resourceKey: "steel_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "piercing_rounds_magazine" }],
	},
	pipe: {
		inputs: [{ amount: 1, resourceKey: "iron_plate" }],
		outputs: [{ amount: 1, resourceKey: "pipe" }],
	},
	plastic_bar: {
		inputs: [
			{ amount: 1, resourceKey: "coal" },
			{ amount: 20, resourceKey: "petroleum_gas" },
		],
		outputs: [{ amount: 1, resourceKey: "plastic_bar" }],
	},
	processing_unit: {
		inputs: [
			{ amount: 2, resourceKey: "advanced_circuit" },
			{ amount: 20, resourceKey: "electronic_circuit" },
			{ amount: 5, resourceKey: "sulfuric_acid" },
		],
		outputs: [{ amount: 1, resourceKey: "processing_unit" }],
	},
	production_science_pack: {
		inputs: [
			{ amount: 1, resourceKey: "electric_furnace" },
			{ amount: 1, resourceKey: "productivity_module_1" },
			{ amount: 30, resourceKey: "rail" },
		],
		outputs: [{ amount: 3, resourceKey: "production_science_pack" }],
	},
	productivity_module_1: {
		inputs: [
			{ amount: 5, resourceKey: "advanced_circuit" },
			{ amount: 5, resourceKey: "electronic_circuit" },
		],
		outputs: [{ amount: 1, resourceKey: "productivity_module_1" }],
	},
	productivity_module_2: {
		inputs: [
			{ amount: 5, resourceKey: "advanced_circuit" },
			{ amount: 5, resourceKey: "processing_unit" },
			{ amount: 4, resourceKey: "productivity_module_1" },
		],
		outputs: [{ amount: 1, resourceKey: "productivity_module_2" }],
	},
	productivity_module_3: {
		inputs: [
			{ amount: 5, resourceKey: "advanced_circuit" },
			{ amount: 5, resourceKey: "electronic_circuit" },
			{ amount: 5, resourceKey: "productivity_module_2" },
		],
		outputs: [{ amount: 1, resourceKey: "productivity_module_3" }],
	},
	pumpjack: {
		inputs: [
			{ amount: 5, resourceKey: "electronic_circuit" },
			{ amount: 10, resourceKey: "iron_gear_wheel" },
			{ amount: 10, resourceKey: "pipe" },
			{ amount: 5, resourceKey: "steel_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "pumpjack" }],
	},
	radar: {
		inputs: [
			{ amount: 5, resourceKey: "electronic_circuit" },
			{ amount: 5, resourceKey: "iron_gear_wheel" },
			{ amount: 10, resourceKey: "iron_plate" },
		],
		outputs: [{ amount: 2, resourceKey: "radar" }],
	},
	rail: {
		inputs: [
			{ amount: 1, resourceKey: "iron_stick" },
			{ amount: 1, resourceKey: "steel_plate" },
			{ amount: 1, resourceKey: "stone" },
		],
		outputs: [{ amount: 2, resourceKey: "rail" }],
	},
	rocket_control_unit: {
		inputs: [
			{ amount: 1, resourceKey: "processing_unit" },
			{ amount: 1, resourceKey: "speed_module_1" },
		],
		outputs: [{ amount: 1, resourceKey: "rocket_control_unit" }],
	},
	rocket_fuel: {
		inputs: [
			{ amount: 10, resourceKey: "light_oil" },
			{ amount: 10, resourceKey: "solid_fuel" },
		],
		outputs: [{ amount: 1, resourceKey: "rocket_fuel" }],
	},
	rocket_part: {
		inputs: [
			{ amount: 10, resourceKey: "low_density_structure" },
			{ amount: 10, resourceKey: "rocket_control_unit" },
			{ amount: 10, resourceKey: "rocket_fuel" },
		],
		outputs: [{ amount: 1, resourceKey: "rocket_part" }],
	},
	satellite: {
		inputs: [
			{ amount: 100, resourceKey: "accumulator" },
			{ amount: 100, resourceKey: "low_density_structure" },
			{ amount: 100, resourceKey: "processing_unit" },
			{ amount: 5, resourceKey: "radar" },
			{ amount: 50, resourceKey: "rocket_fuel" },
			{ amount: 100, resourceKey: "solar_panel" },
		],
		outputs: [{ amount: 1, resourceKey: "satellite" }],
	},
	solar_panel: {
		inputs: [
			{ amount: 5, resourceKey: "copper_plate" },
			{ amount: 15, resourceKey: "electronic_circuit" },
			{ amount: 5, resourceKey: "steel_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "solar_panel" }],
	},
	solid_fuel_1: {
		inputs: [{ amount: 10, resourceKey: "light_oil" }],
		outputs: [{ amount: 1, resourceKey: "solid_fuel" }],
	},
	solid_fuel_2: {
		inputs: [{ amount: 20, resourceKey: "petroleum_gas" }],
		outputs: [{ amount: 1, resourceKey: "solid_fuel" }],
	},
	space_science_pack: {
		inputs: [
			{ amount: 100, resourceKey: "rocket_part" },
			{ amount: 1, resourceKey: "satellite" },
		],
		outputs: [{ amount: 1000, resourceKey: "space_science_pack" }],
	},
	speed_module_1: {
		inputs: [
			{ amount: 5, resourceKey: "advanced_circuit" },
			{ amount: 5, resourceKey: "electronic_circuit" },
		],
		outputs: [{ amount: 1, resourceKey: "speed_module_1" }],
	},
	speed_module_2: {
		inputs: [
			{ amount: 5, resourceKey: "advanced_circuit" },
			{ amount: 5, resourceKey: "processing_unit" },
			{ amount: 4, resourceKey: "speed_module_1" },
		],
		outputs: [{ amount: 1, resourceKey: "speed_module_2" }],
	},
	speed_module_3: {
		inputs: [
			{ amount: 5, resourceKey: "advanced_circuit" },
			{ amount: 5, resourceKey: "processing_unit" },
			{ amount: 5, resourceKey: "speed_module_2" },
		],
		outputs: [{ amount: 1, resourceKey: "speed_module_3" }],
	},
	splitter: {
		inputs: [
			{ amount: 5, resourceKey: "electronic_circuit" },
			{ amount: 5, resourceKey: "iron_plate" },
			{ amount: 4, resourceKey: "transport_belt" },
		],
		outputs: [{ amount: 1, resourceKey: "splitter" }],
	},
	stack_inserter: {
		inputs: [
			{ amount: 1, resourceKey: "advanced_circuit" },
			{ amount: 15, resourceKey: "electronic_circuit" },
			{ amount: 1, resourceKey: "fast_inserter" },
			{ amount: 15, resourceKey: "iron_gear_wheel" },
		],
		outputs: [{ amount: 1, resourceKey: "stack_inserter" }],
	},
	stack_filter_inserter: {
		inputs: [
			{ amount: 5, resourceKey: "electronic_circuit" },
			{ amount: 1, resourceKey: "stack_inserter" },
		],
		outputs: [{ amount: 1, resourceKey: "stack_filter_inserter" }],
	},
	steel_furnace: {
		inputs: [
			{ amount: 6, resourceKey: "steel_plate" },
			{ amount: 10, resourceKey: "stone_brick" },
		],
		outputs: [{ amount: 1, resourceKey: "steel_furnace" }],
	},
	steel_plate: {
		inputs: [{ amount: 5, resourceKey: "iron_plate" }],
		outputs: [{ amount: 1, resourceKey: "steel_plate" }],
	},
	stone_brick: {
		inputs: [{ amount: 2, resourceKey: "stone" }],
		outputs: [{ amount: 1, resourceKey: "stone_brick" }],
	},
	stone_furnace: {
		inputs: [{ amount: 5, resourceKey: "stone" }],
		outputs: [{ amount: 1, resourceKey: "stone_furnace" }],
	},
	storage_tank: {
		inputs: [
			{ amount: 20, resourceKey: "iron_plate" },
			{ amount: 5, resourceKey: "steel_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "storage_tank" }],
	},
	sulfur: {
		inputs: [
			{ amount: 30, resourceKey: "petroleum_gas" },
			{ amount: 30, resourceKey: "water" },
		],
		outputs: [{ amount: 1, resourceKey: "sulfur" }],
	},
	sulfuric_acid: {
		inputs: [
			{ amount: 1, resourceKey: "iron_plate" },
			{ amount: 5, resourceKey: "sulfur" },
			{ amount: 100, resourceKey: "water" },
		],
		outputs: [{ amount: 1, resourceKey: "sulfuric_acid" }],
	},
	transport_belt: {
		inputs: [
			{ amount: 1, resourceKey: "iron_gear_wheel" },
			{ amount: 1, resourceKey: "iron_plate" },
		],
		outputs: [{ amount: 1, resourceKey: "transport_belt" }],
	},
	underground_belt: {
		inputs: [
			{ amount: 10, resourceKey: "iron_plate" },
			{ amount: 5, resourceKey: "transport_belt" },
		],
		outputs: [{ amount: 2, resourceKey: "underground_belt" }],
	},
	utility_science_pack: {
		inputs: [
			{ amount: 1, resourceKey: "flying_robot_frame" },
			{ amount: 3, resourceKey: "low_density_structure" },
			{ amount: 2, resourceKey: "processing_unit" },
		],
		outputs: [{ amount: 3, resourceKey: "utility_science_pack" }],
	},
	wall: {
		inputs: [{ amount: 5, resourceKey: "stone_brick" }],
		outputs: [{ amount: 1, resourceKey: "wall" }],
	},
};

console.info(`Recipe count = ${Object.keys(FactorioRecipe).length}`);

module.exports = FactorioRecipe;
