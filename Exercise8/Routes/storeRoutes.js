const express = require("express");
const router = express.Router();
const controller = require("../Controllers/storeController");

router.get("/products", controller.listProducts);
router.get("/products/:id", controller.getProduct);
router.post("/checkout", controller.checkout);

module.exports = router;