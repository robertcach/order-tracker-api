const express = require("express");
const router = express.Router();
const productController = require("../controllers/products.controller");
const orderController = require("../controllers/orders.controller");
const customerController = require("../controllers/customers.controller");

/* HOME */
router.get("/", orderController.list);

/* PRODUCTS */
router.post("/product/new", productController.create);
router.get("/product/:id", productController.detail);

/* ORDERS */
router.post("/order/new", orderController.create);
router.get("/order/:id", orderController.detail);
router.patch("/order/:id", orderController.update);
router.delete("/order/:id", orderController.delete);

/* CUSTOMER */
router.post("/customer/new", customerController.create);
router.get("/customers", customerController.list);
router.get("/customer/me", customerController.getCurrentUser);
router.get("/customer/:id", customerController.getUserById);

module.exports = router;
