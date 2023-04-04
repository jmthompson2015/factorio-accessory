/* eslint no-console: ["error", { allow: ["info"] }] */

const KrastorioRecipe = {
	advanced_circuit: {
		inputs: [
			{ resourceKey: "copper_cable" },
			{ resourceKey: "electronic_components" },
			{ resourceKey: "electronic_circuit" },
		],
		outputs: [{ resourceKey: "advanced_circuit" }],
	},
	advanced_splitter: {
		inputs: [
			{ resourceKey: "steel_gear_wheel" },
			{ resourceKey: "advanced_circuit" },
			{ resourceKey: "express_splitter" },
		],
		outputs: [{ resourceKey: "advanced_splitter" }],
	},
	advanced_tech_card: {
		inputs: [
			{ resourceKey: "lithium_sulfur_battery" },
			{ resourceKey: "imersium_gear_wheel" },
			{ resourceKey: "electric_engine_unit" },
			{ resourceKey: "blank_tech_card" },
		],
		outputs: [{ resourceKey: "advanced_tech_card" }],
	},
	advanced_transport_belt: {
		inputs: [
			{ resourceKey: "rare_metals" },
			{ resourceKey: "steel_gear_wheel" },
			{ resourceKey: "express_transport_belt" },
		],
		outputs: [{ resourceKey: "advanced_transport_belt" }],
	},
	advanced_underground_belt: {
		inputs: [
			{ resourceKey: "advanced_transport_belt" },
			{ resourceKey: "express_underground_belt" },
		],
		outputs: [{ resourceKey: "advanced_underground_belt" }],
	},
	ai_core: {
		inputs: [
			{ resourceKey: "processing_unit" },
			{ resourceKey: "imersite_crystal" },
			{ resourceKey: "nitric_acid" },
		],
		outputs: [{ resourceKey: "ai_core" }],
	},
	ammonia: {
		inputs: [{ resourceKey: "hydrogen" }, { resourceKey: "nitrogen" }],
		outputs: [{ resourceKey: "ammonia" }],
	},
	automation_core: {
		inputs: [
			{ resourceKey: "copper_plate" },
			{ resourceKey: "iron_stick" },
			{ resourceKey: "iron_gear_wheel" },
		],
		outputs: [{ resourceKey: "automation_core" }],
	},
	automation_tech_card: {
		inputs: [
			{ resourceKey: "automation_core" },
			{ resourceKey: "blank_tech_card" },
		],
		outputs: [{ resourceKey: "automation_tech_card" }],
	},
	basic_tech_card: {
		inputs: [{ resourceKey: "wood" }, { resourceKey: "copper_cable" }],
		outputs: [{ resourceKey: "basic_tech_card" }],
	},
	blank_tech_card: {
		inputs: [
			{ resourceKey: "iron_plate" },
			{ resourceKey: "copper_cable" },
		],
		outputs: [{ resourceKey: "blank_tech_card" }],
	},
	charged_matter_stabilizer: {
		inputs: [{ resourceKey: "matter_stabilizer" }],
		outputs: [{ resourceKey: "charged_matter_stabilizer" }],
	},
	chemical_tech_card: {
		inputs: [
			{ resourceKey: "glass" },
			{ resourceKey: "advanced_circuit" },
			{ resourceKey: "blank_tech_card" },
			{ resourceKey: "sulfuric_acid" },
		],
		outputs: [{ resourceKey: "chemical_tech_card" }],
	},
	coke: {
		inputs: [{ resourceKey: "wood" }, { resourceKey: "coal" }],
		outputs: [{ resourceKey: "coke" }],
	},
	copper_cable: {
		inputs: [{ resourceKey: "copper_plate" }],
		outputs: [{ resourceKey: "copper_cable" }],
	},
	electric_engine_unit: {
		inputs: [
			{ resourceKey: "electronic_circuit" },
			{ resourceKey: "engine_unit" },
			{ resourceKey: "lubricant" },
		],
		outputs: [{ resourceKey: "electric_engine_unit" }],
	},
	electronic_circuit: {
		inputs: [
			{ resourceKey: "wood" },
			{ resourceKey: "iron_plate" },
			{ resourceKey: "copper_cable" },
		],
		outputs: [{ resourceKey: "electronic_circuit" }],
	},
	electronic_components: {
		inputs: [
			{ resourceKey: "glass" },
			{ resourceKey: "silicon" },
			{ resourceKey: "plastic_bar" },
		],
		outputs: [{ resourceKey: "electronic_components" }],
	},
	energy_control_unit: {
		inputs: [
			{ resourceKey: "lithium_sulfur_battery" },
			{ resourceKey: "electronic_components" },
			{ resourceKey: "low_density_structure" },
			{ resourceKey: "imersite_crystal" },
		],
		outputs: [{ resourceKey: "energy_control_unit" }],
	},
	engine_unit: {
		inputs: [
			{ resourceKey: "iron_plate" },
			{ resourceKey: "iron_gear_wheel" },
			{ resourceKey: "pipe" },
		],
		outputs: [{ resourceKey: "engine_unit" }],
	},
	express_splitter: {
		inputs: [
			{ resourceKey: "steel_gear_wheel" },
			{ resourceKey: "electronic_components" },
			{ resourceKey: "fast_splitter" },
		],
		outputs: [{ resourceKey: "express_splitter" }],
	},
	express_transport_belt: {
		inputs: [
			{ resourceKey: "steel_gear_wheel" },
			{ resourceKey: "fast_transport_belt" },
			{ resourceKey: "lubricant" },
		],
		outputs: [{ resourceKey: "express_transport_belt" }],
	},
	express_underground_belt: {
		inputs: [
			{ resourceKey: "express_transport_belt" },
			{ resourceKey: "fast_underground_belt" },
		],
		outputs: [{ resourceKey: "express_underground_belt" }],
	},
	fast_splitter: {
		inputs: [
			{ resourceKey: "iron_gear_wheel" },
			{ resourceKey: "electronic_circuit" },
			{ resourceKey: "splitter" },
		],
		outputs: [{ resourceKey: "fast_splitter" }],
	},
	fast_transport_belt: {
		inputs: [
			{ resourceKey: "iron_gear_wheel" },
			{ resourceKey: "transport_belt" },
		],
		outputs: [{ resourceKey: "fast_transport_belt" }],
	},
	fast_underground_belt: {
		inputs: [
			{ resourceKey: "fast_transport_belt" },
			{ resourceKey: "underground_belt" },
		],
		outputs: [{ resourceKey: "fast_underground_belt" }],
	},
	glass: {
		inputs: [{ resourceKey: "sand" }],
		outputs: [{ resourceKey: "glass" }],
	},
	grenade: {
		inputs: [{ resourceKey: "coal" }, { resourceKey: "iron_plate" }],
		outputs: [{ resourceKey: "grenade" }],
	},
	hydrogen_chloride: {
		inputs: [{ resourceKey: "chlorine" }, { resourceKey: "hydrogen" }],
		outputs: [{ resourceKey: "hydrogen_chloride" }],
	},
	imersite_crystal: {
		inputs: [
			{ resourceKey: "imersite_powder" },
			{ resourceKey: "nitric_acid" },
			{ resourceKey: "sulfuric_acid" },
		],
		outputs: [{ resourceKey: "imersite_crystal" }],
	},
	imersium_gear_wheel: {
		inputs: [{ resourceKey: "imersium_plate" }],
		outputs: [{ resourceKey: "imersium_gear_wheel" }],
	},
	imersium_plate: {
		inputs: [
			{ resourceKey: "rare_metals" },
			{ resourceKey: "imersite_powder" },
		],
		outputs: [{ resourceKey: "imersium_plate" }],
	},
	iron_beam: {
		inputs: [{ resourceKey: "iron_plate" }],
		outputs: [{ resourceKey: "iron_beam" }],
	},
	iron_gear_wheel: {
		inputs: [{ resourceKey: "iron_plate" }],
		outputs: [{ resourceKey: "iron_gear_wheel" }],
	},
	iron_stick: {
		inputs: [{ resourceKey: "iron_plate" }],
		outputs: [{ resourceKey: "iron_stick" }],
	},
	lithium: {
		inputs: [{ resourceKey: "lithium_chloride" }, { resourceKey: "water" }],
		outputs: [{ resourceKey: "lithium" }],
	},
	lithium_chloride: {
		inputs: [
			{ resourceKey: "mineral_water" },
			{ resourceKey: "hydrogen_chloride" },
		],
		outputs: [{ resourceKey: "lithium_chloride" }],
	},
	lithium_sulfur_battery: {
		inputs: [
			{ resourceKey: "copper_plate" },
			{ resourceKey: "lithium" },
			{ resourceKey: "sulfuric_acid" },
		],
		outputs: [{ resourceKey: "lithium_sulfur_battery" }],
	},
	logistic_tech_card: {
		inputs: [
			{ resourceKey: "iron_gear_wheel" },
			{ resourceKey: "electronic_circuit" },
			{ resourceKey: "blank_tech_card" },
		],
		outputs: [{ resourceKey: "logistic_tech_card" }],
	},
	low_density_structure: {
		inputs: [
			{ resourceKey: "copper_plate" },
			{ resourceKey: "steel_plate" },
			{ resourceKey: "plastic_bar" },
		],
		outputs: [{ resourceKey: "low_density_structure" }],
	},
	lubricant: {
		inputs: [{ resourceKey: "heavy_oil" }],
		outputs: [{ resourceKey: "lubricant" }],
	},
	matter_research_data: {
		inputs: [
			{ resourceKey: "rare_metals" },
			{ resourceKey: "plastic_bar" },
			{ resourceKey: "lithium" },
			{ resourceKey: "imersite_crystal" },
		],
		outputs: [{ resourceKey: "matter_research_data" }],
	},
	matter_stabilizer: {
		inputs: [
			{ resourceKey: "imersium_plate" },
			{ resourceKey: "processing_unit" },
			{ resourceKey: "energy_control_unit" },
		],
		outputs: [{ resourceKey: "matter_stabilizer" }],
	},
	matter_tech_card: {
		inputs: [
			{ resourceKey: "processing_unit" },
			{ resourceKey: "blank_tech_card" },
			{ resourceKey: "matter_research_data" },
		],
		outputs: [{ resourceKey: "matter_tech_card" }],
	},
	military_research_data: {
		inputs: [
			{ resourceKey: "submachine_gun" },
			{ resourceKey: "grenade" },
			{ resourceKey: "wall" },
		],
		outputs: [{ resourceKey: "military_research_data" }],
	},
	military_tech_card: {
		inputs: [
			{ resourceKey: "electronic_components" },
			{ resourceKey: "blank_tech_card" },
			{ resourceKey: "military_research_data" },
		],
		outputs: [{ resourceKey: "military_tech_card" }],
	},
	nitric_acid: {
		inputs: [
			{ resourceKey: "rare_metals" },
			{ resourceKey: "ammonia" },
			{ resourceKey: "mineral_water" },
		],
		outputs: [{ resourceKey: "nitric_acid" }],
	},
	optimization_tech_card: {
		inputs: [
			{ resourceKey: "blank_tech_card" },
			{ resourceKey: "space_research_data" },
		],
		outputs: [{ resourceKey: "optimization_tech_card" }],
	},
	pipe: {
		inputs: [{ resourceKey: "iron_plate" }],
		outputs: [{ resourceKey: "pipe" }],
	},
	plastic_bar: {
		inputs: [{ resourceKey: "coal" }, { resourceKey: "petroleum_gas" }],
		outputs: [{ resourceKey: "plastic_bar" }],
	},
	processing_unit: {
		inputs: [
			{ resourceKey: "rare_metals" },
			{ resourceKey: "advanced_circuit" },
			{ resourceKey: "sulfuric_acid" },
		],
		outputs: [{ resourceKey: "processing_unit" }],
	},
	production_tech_card: {
		inputs: [
			{ resourceKey: "uranium_238" },
			{ resourceKey: "blank_tech_card" },
			{ resourceKey: "fast_transport_belt" },
			{ resourceKey: "productivity_module_1" },
		],
		outputs: [{ resourceKey: "production_tech_card" }],
	},
	productivity_module_1: {
		inputs: [
			{ resourceKey: "electronic_components" },
			{ resourceKey: "electronic_circuit" },
		],
		outputs: [{ resourceKey: "productivity_module_1" }],
	},
	quartz: {
		inputs: [{ resourceKey: "sand" }, { resourceKey: "water" }],
		outputs: [{ resourceKey: "quartz" }],
	},
	rocket_fuel: {
		inputs: [
			{ resourceKey: "iron_plate" },
			{ resourceKey: "light_oil" },
			{ resourceKey: "oxygen" },
		],
		outputs: [{ resourceKey: "rocket_fuel" }],
	},
	sand: {
		inputs: [{ resourceKey: "stone" }],
		outputs: [{ resourceKey: "sand" }],
	},
	silicon: {
		inputs: [{ resourceKey: "quartz" }],
		outputs: [{ resourceKey: "silicon" }],
	},
	singularity_tech_card: {
		inputs: [
			{ resourceKey: "ai_core" },
			{ resourceKey: "charged_matter_stabilizer" },
			{ resourceKey: "blank_tech_card" },
		],
		outputs: [{ resourceKey: "singularity_tech_card" }],
	},
	splitter: {
		inputs: [
			{ resourceKey: "iron_gear_wheel" },
			{ resourceKey: "automation_core" },
			{ resourceKey: "transport_belt" },
		],
		outputs: [{ resourceKey: "splitter" }],
	},
	steel_gear_wheel: {
		inputs: [{ resourceKey: "steel_plate" }],
		outputs: [{ resourceKey: "steel_gear_wheel" }],
	},
	steel_plate: {
		inputs: [{ resourceKey: "coke" }, { resourceKey: "iron_plate" }],
		outputs: [{ resourceKey: "steel_plate" }],
	},
	stone_brick: {
		inputs: [{ resourceKey: "stone" }],
		outputs: [{ resourceKey: "stone_brick" }],
	},
	submachine_gun: {
		inputs: [
			{ resourceKey: "iron_plate" },
			{ resourceKey: "copper_plate" },
			{ resourceKey: "iron_gear_wheel" },
		],
		outputs: [{ resourceKey: "submachine_gun" }],
	},
	sulfur: {
		inputs: [{ resourceKey: "water" }, { resourceKey: "petroleum_gas" }],
		outputs: [{ resourceKey: "sulfur" }],
	},
	sulfuric_acid: {
		inputs: [
			{ resourceKey: "iron_plate" },
			{ resourceKey: "sulfur" },
			{ resourceKey: "water" },
		],
		outputs: [{ resourceKey: "sulfuric_acid" }],
	},
	transport_belt: {
		inputs: [
			{ resourceKey: "iron_plate" },
			{ resourceKey: "iron_gear_wheel" },
		],
		outputs: [{ resourceKey: "transport_belt" }],
	},
	underground_belt: {
		inputs: [
			{ resourceKey: "iron_beam" },
			{ resourceKey: "transport_belt" },
		],
		outputs: [{ resourceKey: "underground_belt" }],
	},
	utility_tech_card: {
		inputs: [
			{ resourceKey: "processing_unit" },
			{ resourceKey: "low_density_structure" },
			{ resourceKey: "rocket_fuel" },
			{ resourceKey: "blank_tech_card" },
		],
		outputs: [{ resourceKey: "utility_tech_card" }],
	},
	wall: {
		inputs: [{ resourceKey: "stone_brick" }],
		outputs: [{ resourceKey: "wall" }],
	},
	wood: {
		inputs: [{ resourceKey: "water" }],
		outputs: [{ resourceKey: "wood" }],
	},
};

console.info(`Krastorio Recipe count = ${Object.keys(KrastorioRecipe).length}`);

export default KrastorioRecipe;
