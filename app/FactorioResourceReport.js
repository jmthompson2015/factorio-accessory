import FactorioRecipe from "../artifact/FactorioRecipe.js";
import FactorioResource from "../artifact/FactorioResource.js";

import ResourceReport from "./ResourceReport.js";

ResourceReport.rawResourceReport(FactorioResource);
ResourceReport.resourceCountReport(FactorioRecipe);
ResourceReport.ironGearWheelsReport(FactorioRecipe);
ResourceReport.missingFabricators(FactorioRecipe);
ResourceReport.missingRawFlag(FactorioRecipe, FactorioResource);
ResourceReport.hasRawFlag(FactorioRecipe, FactorioResource);
