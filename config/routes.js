const express = require("express");
const router = express.Router();
const productController = require("../controllers/products.controller");

/* ROUTES */
router.get("/", (req, res, next) => res.status(200).json({ ok: true }));
router.post("/product/new", productController.create);

module.exports = router;
