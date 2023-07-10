const express = require("express");
const router = express.Router();
const productController = require("../controllers/products.controller");
const orderController = require("../controllers/orders.controller");

/* HOME */
router.get("/", (req, res, next) => res.status(200).json({ ok: true }));

/* PRODUCTS */
router.post("/product/new", productController.create);
router.get("/product/:id", productController.detail);

/* ORDERS */
router.post("/order/new", orderController.create);
router.get("/order/:id", orderController.detail);

module.exports = router;
