//Load the 'customer' mongoose model.
const customerModel = require("../models/CustomerModel");
const bcrypt = require("bcrypt");

//Display all customers.
exports.displayAllCustomers = async (req, res) => {
  try {
    //Find all documents.
    let allCustomers = await customerModel.find({});
    res.status(200).send(allCustomers);
  } catch (e) {
    //Log Errors.
    res.status(400).send(e);
  }
};

//Sign up a customer.
exports.signUpCustomer = async (req, res) => {
  let newCustomer = new customerModel(req.body);
  try {
    //Save customer and return them
    await newCustomer.save();
    res.status(200).send(newCustomer);
  } catch (e) {
    //Log Errors.
    res.status(400).send(e);
  }
};

//Login a customer.
exports.loginCustomer = async (req, res) => {
  let customer = await customerModel.findOne({ email: req.body.email });
  try {
    if (customer === null) {
      //Log Errors.
      res.status(400).send("Unable to login");
    }

    if (await bcrypt.compare(req.body.password, customer.password)) {
      res.status(200).send({ customer });
    } else {
      //Log Errors.
      res.status(400).send("Unable to login");
    }
  } catch (e) {
    //Log Errors.
    res.status(400).send(e);
  }
};
