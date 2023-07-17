const Customer = require("../models/Customer.model");

module.exports.create = (req, res, next) => {
  Customer.create(req.body)
    .then((customer) => res.status(201).json(customer))
    .catch(next);
};

module.exports.getUserById = (req, res, next) => {
  Customer.findById(req.params.id)
    .then((customer) => {
      if (!customer) {
        next(createError(404, "Customer not found"));
      } else {
        res.status(200).json(customer);
      }
    })
    .catch(next);
};

module.exports.getCurrentUser = (req, res, next) => {
  Customer.findById(req.customer)
    .populate({ path: "orders", options: { sort: [{ orders: "desc" }] } })
    .sort({ plants: "desc" })
    .then((user) => {
      if (!user) {
        next(createError(404, "User not found"));
      } else {
        res.status(200).json(user);
      }
    })
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Customer.find()
    .then((customers) => res.status(200).json(customers))
    .catch(next);
};
