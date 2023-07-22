const Customer = require("../models/Customer.model");

module.exports.create = (req, res, next) => {
  Customer.create(req.body)
    .then((customer) => res.status(201).json(customer))
    .catch(next);
};

module.exports.getUserById = (req, res, next) => {
  Customer.findById(req.params.id)
    .populate({
      path: "orders",
      select: "_id",
      options: { sort: [{ _id: "desc" }] },
    })
    .sort({ orders: "desc" })
    .then((customer) => {
      if (!customer) {
        next(createError(404, "Customer not found"));
      } else {
        const ordersIds = customer.orders.map((order) => order._id);
        customer.orders = ordersIds;

        res.status(200).json(customer);
      }
    })
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Customer.find()
    .then((customers) => res.status(200).json(customers))
    .catch(next);
};
