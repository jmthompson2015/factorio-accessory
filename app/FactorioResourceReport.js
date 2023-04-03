const R = require("ramda");

const FactorioRecipe = require("../artifact/FactorioRecipe.js");
const FactorioResource = require("../artifact/FactorioResource.js");

const ResourceReport = require("./ResourceReport.js");

ResourceReport.rawResourceReport(FactorioResource);
ResourceReport.resourceCountReport(FactorioRecipe);
ResourceReport.ironGearWheelsReport(FactorioRecipe);
ResourceReport.missingFabricators(FactorioRecipe);
ResourceReport.missingRawFlag(FactorioRecipe, FactorioResource);
ResourceReport.hasRawFlag(FactorioRecipe, FactorioResource);
