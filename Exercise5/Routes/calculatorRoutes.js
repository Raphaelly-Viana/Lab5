const express = require("express");
const router = express.Router();
const calc = require("./controllers/calculatorController");

router.get("/add", calc.add);
router.get("/subtract", calc.subtract);
router.get("/multiply", calc.multiply);
router.get("/divide", calc.divide);

module.exports = router;