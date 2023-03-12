node ./app/DotGenerator

dot -Tpng dot/automation_science_pack.dot -o dist/automation_science_pack.png
dot -Tpng dot/logistic_science_pack.dot -o dist/logistic_science_pack.png
dot -Tpng dot/military_science_pack.dot -o dist/military_science_pack.png
dot -Tpng dot/chemical_science_pack.dot -o dist/chemical_science_pack.png
dot -Tpng dot/production_science_pack.dot -o dist/production_science_pack.png
dot -Tpng dot/space_science_pack.dot -o dist/space_science_pack.png
dot -Tpng dot/utility_science_pack.dot -o dist/utility_science_pack.png
dot -Tpng dot/science_packs.dot -o dist/science_packs.png

dot -Tpng dot/essentials.dot -o dist/essentials.png

dot -Tpng dot/inserters.dot -o dist/inserters.png
dot -Tpng dot/transport_belts.dot -o dist/transport_belts.png
dot -Tpng dot/oil_processing.dot -o dist/oil_processing.png
dot -Tpng dot/solar_power.dot -o dist/solar_power.png
dot -Tpng dot/flying_robot_frame.dot -o dist/flying_robot_frame.png
dot -Tpng dot/nuclear_power.dot -o dist/nuclear_power.png

neato -Tpng dot/everything.dot -Goverlap=false -Gsplines=true -o dist/everything.png
