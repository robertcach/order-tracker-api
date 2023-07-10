const Product = require("../models/Product.model");

module.exports.create = (req, res, next) => {
  const product = ({ title, description, price } = req.body);

  Product.create(product)
    .then((newProduct) => res.status(200).json(newProduct))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Product.findById(req.params.id)
    .then((product) => res.status(200).json(product))
    .catch(next);
};
