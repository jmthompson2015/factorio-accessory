/* eslint no-console: ["error", { allow: ["info"] }] */

const FactorioResource = {
	accumulator: {
		name: "Accumulator",
		image: "icons/Accumulator.png",
	},
	advanced_circuit: {
		name: "Advanced Circuit",
		image: "icons/Advanced_circuit.png",
		color: "red",
		isBus: true,
	},
	automation_science_pack: {
		name: "Automation Science Pack",
		image: "icons/Automation_science_pack.png",
		color: "red",
	},
	battery: {
		name: "Battery",
		image: "icons/Battery.png",
		isBus: true,
	},
	burner_inserter: {
		name: "Burner Inserter",
		image: "icons/Burner_inserter.png",
	},
	chemical_science_pack: {
		name: "Chemical Science Pack",
		image: "icons/Chemical_science_pack.png",
		color: "cyan",
	},
	coal: {
		name: "Coal",
		image: "icons/Coal.png",
		isMap: true,
	},
	copper_cable: {
		name: "Copper Cable",
		image: "icons/Copper_cable.png",
	},
	copper_ore: {
		name: "Copper Ore",
		image: "icons/Copper_ore.png",
		isMap: true,
	},
	copper_plate: {
		name: "Copper Plate",
		image: "icons/Copper_plate.png",
		isBus: true,
	},
	crude_oil: {
		name: "Crude Oil",
		image: "icons/Crude_oil.png",
		isFluid: true,
		isMap: true,
	},
	electric_engine_unit: {
		name: "Electric Engine Unit",
		image: "icons/Electric_engine_unit.png",
	},
	electric_furnace: {
		name: "Electric Furnace",
		image: "icons/Electric_furnace.png",
	},
	electronic_circuit: {
		name: "Electronic Circuit",
		image: "icons/Electronic_circuit.png",
		color: "green",
		isBus: true,
	},
	engine_unit: {
		name: "Engine Unit",
		image: "icons/Engine_unit.png",
	},
	express_splitter: {
		name: "Express Splitter",
		image: "icons/Express_splitter.png",
	},
	express_transport_belt: {
		name: "Express Transport Belt",
		image: "icons/Express_transport_belt.png",
	},
	express_underground_belt: {
		name: "Express Underground Belt",
		image: "icons/Express_underground_belt.png",
	},
	fast_inserter: {
		name: "Fast Inserter",
		image: "icons/Fast_inserter.png",
	},
	fast_splitter: {
		name: "Fast Splitter",
		image: "icons/Fast_splitter.png",
	},
	fast_transport_belt: {
		name: "Fast Transport Belt",
		image: "icons/Fast_transport_belt.png",
	},
	fast_underground_belt: {
		name: "Fast Underground Belt",
		image: "icons/Fast_underground_belt.png",
	},
	filter_inserter: {
		name: "Filter Inserter",
		image: "icons/Filter_inserter.png",
	},
	firearm_magazine: {
		name: "Firearm Magazine",
		image: "icons/Firearm_magazine.png",
	},
	flying_robot_frame: {
		name: "Flying Robot Frame",
		image: "icons/Flying_robot_frame.png",
	},
	grenade: {
		name: "Grenade",
		image: "icons/Grenade.png",
	},
	heavy_oil: {
		name: "Heavy Oil",
		image: "icons/Heavy_oil.png",
		isFluid: true,
	},
	inserter: {
		name: "Inserter",
		image: "icons/Inserter.png",
		color: "yellow",
	},
	iron_gear_wheel: {
		name: "Iron Gear Wheel",
		image: "icons/Iron_gear_wheel.png",
	},
	iron_ore: {
		name: "Iron Ore",
		image: "icons/Iron_ore.png",
		isMap: true,
	},
	iron_plate: {
		name: "Iron Plate",
		image: "icons/Iron_plate.png",
		isBus: true,
	},
	iron_stick: {
		name: "Iron Stick",
		image: "icons/Iron_stick.png",
	},
	light_oil: {
		name: "Light Oil",
		image: "icons/Light_oil.png",
		isFluid: true,
	},
	logistic_science_pack: {
		name: "Logistic Science Pack",
		image: "icons/Logistic_science_pack.png",
		color: "green",
	},
	long_handed_inserter: {
		name: "Long-Handed Inserter",
		image: "icons/Long-handed_inserter.png",
		color: "red",
	},
	low_density_structure: {
		name: "Low Density Structure",
		image: "icons/Low_density_structure.png",
	},
	lubricant: {
		name: "Lubricant",
		image: "icons/Lubricant.png",
		isBus: true,
		isFluid: true,
	},
	military_science_pack: {
		name: "Military Science Pack",
		image: "icons/Military_science_pack.png",
		color: "gray",
	},
	petroleum_gas: {
		name: "Petroleum Gas",
		image: "icons/Petroleum_gas.png",
	},
	piercing_rounds_magazine: {
		name: "Piercing Rounds Magazine",
		image: "icons/Piercing_rounds_magazine.png",
	},
	pipe: {
		name: "Pipe",
		image: "icons/Pipe.png",
	},
	plastic_bar: {
		name: "Plastic Bar",
		image: "icons/Plastic_bar.png",
		isBus: true,
	},
	processing_unit: {
		name: "Processing Unit",
		image: "icons/Processing_unit.png",
		color: "blue",
		isBus: true,
	},
	production_science_pack: {
		name: "Production Science Pack",
		image: "icons/Production_science_pack.png",
		color: "purple",
	},
	productivity_module_1: {
		name: "Productivity Module 1",
		image: "icons/Productivity_module.png",
	},
	rail: {
		name: "Rail",
		image: "icons/Straight_rail.png",
	},
	rocket_fuel: {
		name: "Rocket Fuel",
		image: "icons/Rocket_fuel.png",
	},
	solar_panel: {
		name: "Solar Panel",
		image: "icons/Solar_panel.png",
	},
	solid_fuel: {
		name: "Solid Fuel",
		image: "icons/Solid_fuel.png",
	},
	splitter: {
		name: "Splitter",
		image: "icons/Splitter.png",
	},
	stack_filter_inserter: {
		name: "Stack Filter Inserter",
		image: "icons/Stack_filter_inserter.png",
	},
	stack_inserter: {
		name: "Stack Inserter",
		image: "icons/Stack_inserter.png",
	},
	steel_plate: {
		name: "Steel Plate",
		image: "icons/Steel_plate.png",
		isBus: true,
	},
	stone: {
		name: "Stone",
		image: "icons/Stone.png",
		isBus: true,
		isMap: true,
	},
	stone_brick: {
		name: "Stone Brick",
		image: "icons/Stone_brick.png",
		isBus: true,
	},
	sulfur: {
		name: "Sulfur",
		image: "icons/Sulfur.png",
	},
	sulfuric_acid: {
		name: "Sulfuric Acid",
		image: "icons/Sulfuric_acid.png",
		isFluid: true,
		isBus: true,
	},
	transport_belt: {
		name: "Transport Belt",
		image: "icons/Transport_belt.png",
	},
	underground_belt: {
		name: "Underground Belt",
		image: "icons/Underground_belt.png",
	},
	utility_science_pack: {
		name: "Utility Science Pack",
		image: "icons/Utility_science_pack.png",
		color: "yellow",
	},
	wall: {
		name: "Wall",
		image: "icons/Wall.png",
	},
	water: {
		name: "Water",
		image: "icons/Water.png",
		isFluid: true,
		isMap: true,
	},
};

console.info(`Resource count = ${Object.keys(FactorioResource).length}`);

module.exports = FactorioResource;