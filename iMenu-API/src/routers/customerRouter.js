const express = require("express");
const router = new express.Router();
require("../db/mongoose");

//Load the 'customer' controller.
var customer = require("../controllers/CustomerController");

//handle a get request made to /customer/all.
router.get("/customer/all", customer.displayAllCustomers);
//handle a post request made to /customer/signup
router.post("/customer/signup", customer.signUpCustomer);
//handle a post request made to /customer/login
router.post("/customer/login", customer.loginCustomer);

module.exports = router;
