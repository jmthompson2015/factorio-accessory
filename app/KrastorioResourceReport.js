import * as R from "ramda";

import KrastorioRecipe from "../artifact/KrastorioRecipe.js";
import KrastorioResource from "../artifact/KrastorioResource.js";

import ResourceReport from "./ResourceReport.js";

ResourceReport.rawResourceReport(KrastorioResource);
ResourceReport.resourceCountReport(KrastorioRecipe);
ResourceReport.ironGearWheelsReport(KrastorioRecipe);
ResourceReport.missingFabricators(KrastorioRecipe);
ResourceReport.missingRawFlag(KrastorioRecipe, KrastorioResource);
ResourceReport.hasRawFlag(KrastorioRecipe, KrastorioResource);
