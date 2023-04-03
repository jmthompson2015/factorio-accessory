const R = require("ramda");

const KrastorioRecipe = require("../artifact/KrastorioRecipe.js");
const KrastorioResource = require("../artifact/KrastorioResource.js");

const ResourceReport = require("./ResourceReport.js");

ResourceReport.rawResourceReport(KrastorioResource);
ResourceReport.resourceCountReport(KrastorioRecipe);
ResourceReport.ironGearWheelsReport(KrastorioRecipe);
