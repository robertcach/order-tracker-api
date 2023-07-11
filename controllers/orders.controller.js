const Order = require("../models/Order.model");

module.exports.create = (req, res, next) => {
  const order = ({ total, status, customer, products } = req.body);
  console.log(order);

  Order.create(order)
    .then((customer) => res.status(200).json(customer))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Order.findById(req.params.id)
    .then((order) => res.status(200).json(order))
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedOrder) => res.status(200).json(updatedOrder))
    .catch(next);
};
