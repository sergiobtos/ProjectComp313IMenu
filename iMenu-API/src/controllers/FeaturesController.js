//Display all features.
exports.displayAllFeatures = (req, res) => {
  res.json({
    //What can be done with customer.
    Customer: {
      //Get all the customers.
      getAll: "/customer/all",
      signUp: "/customer/signup",
      login: "/customer/login",
    },
  });
};
