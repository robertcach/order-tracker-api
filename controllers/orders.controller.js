const Order = require("../models/Order.model");

module.exports.create = (req, res, next) => {
  const order = ({ total, status, customer, products } = req.body);

  Order.create(order)
    .then((customer) => res.status(200).json(customer))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Order.findById(req.params.id)
    .populate("customer")
    .populate({
      path: "products",
      options: { sort: [{ products: "desc" }] },
    })
    .sort({ products: "desc" })
    .then((order) => res.status(200).json(order))
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedOrder) => res.status(200).json(updatedOrder))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Order.findByIdAndRemove(req.params.id)
    .then((orderToDelete) => res.status(200).json(orderToDelete))
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Order.find()
    .populate("customer")
    .populate({
      path: "products",
      options: { sort: [{ products: "desc" }] },
    })
    .sort({ products: "desc" })
    .then((orders) => res.status(200).json(orders))
    .catch(next);
};
