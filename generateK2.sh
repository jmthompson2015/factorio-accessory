node ./app/KrastorioDotGenerator

dot -Tpng dot/krastorio/basic_tech_card.dot -o dist/krastorio/basic_tech_card.png
dot -Tpng dot/krastorio/automation_tech_card.dot -o dist/krastorio/automation_tech_card.png
dot -Tpng dot/krastorio/logistic_tech_card.dot -o dist/krastorio/logistic_tech_card.png
dot -Tpng dot/krastorio/military_tech_card.dot -o dist/krastorio/military_tech_card.png
dot -Tpng dot/krastorio/chemical_tech_card.dot -o dist/krastorio/chemical_tech_card.png
dot -Tpng dot/krastorio/production_tech_card.dot -o dist/krastorio/production_tech_card.png
dot -Tpng dot/krastorio/utility_tech_card.dot -o dist/krastorio/utility_tech_card.png
dot -Tpng dot/krastorio/optimization_tech_card.dot -o dist/krastorio/optimization_tech_card.png
dot -Tpng dot/krastorio/matter_tech_card.dot -o dist/krastorio/matter_tech_card.png
dot -Tpng dot/krastorio/advanced_tech_card.dot -o dist/krastorio/advanced_tech_card.png
dot -Tpng dot/krastorio/singularity_tech_card.dot -o dist/krastorio/singularity_tech_card.png

dot -Tpng dot/krastorio/tech_cards_end_game.dot -o dist/krastorio/tech_cards_end_game.png

dot -Tpng dot/krastorio/matter_assembler.dot -o dist/krastorio/matter_assembler.png
dot -Tpng dot/krastorio/transport_belts.dot -o dist/krastorio/transport_belts.png

neato -Tpng dot/krastorio/everything.dot -Goverlap=false -Gsplines=true -o dist/krastorio/everything.png
