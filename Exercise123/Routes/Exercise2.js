const express = require("express");
const router = express.Router();


// ADD
router.get("/add/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const result = Number(num1) + Number(num2);
  res.send(`Result: ${result}`);
});

// SUBTRACT
router.get("/subtract/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const result = Number(num1) - Number(num2);
  res.send(`Result: ${result}`);
});

// MULTIPLY
router.get("/multiply/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const result = Number(num1) * Number(num2);
  res.send(`Result: ${result}`);
});

// DIVIDE
router.get("/divide/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;

  if (Number(num2) === 0) {
    return res.send("Error: Cannot divide by zero");
  }

  const result = Number(num1) / Number(num2);
  res.send(`Result: ${result}`);
});



module.exports = router;