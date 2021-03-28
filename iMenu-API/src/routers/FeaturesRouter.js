const express = require("express");
const router = new express.Router();

//Load the 'features' controller.
var features = require("../controllers/FeaturesController");

//handle a get request made to /features.
router.get("/features", features.displayAllFeatures);

module.exports = router;
