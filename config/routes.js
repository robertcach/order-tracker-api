const express = require("express");
const router = express.Router();
const productController = require("../controllers/products.controller");

/* HOME */
router.get("/", (req, res, next) => res.status(200).json({ ok: true }));

/* PRODUCTS */
router.post("/product/new", productController.create);
router.get("/product/:id", productController.detail);

module.exports = router;
