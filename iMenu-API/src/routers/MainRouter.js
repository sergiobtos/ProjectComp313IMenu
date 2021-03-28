const express = require("express");
const router = new express.Router();

//Load the 'main' controller.
var main = require("../controllers/MainController");

//handle a get request made to root path
router.get("/", main.basicInfo);

module.exports = router;
