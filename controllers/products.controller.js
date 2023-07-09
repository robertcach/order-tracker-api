const Product = require("../models/Product.model");

module.exports.create = (req, res, next) => {
  const product = ({ title, description, price } = req.body);
  console.log(product);

  Product.create(product)
    .then((newProduct) => res.status(200).json(newProduct))
    .catch(next);
};
