const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hello Rapha!");
});

router.get("/test2", (req, res) => {
  res.send("Hello Tiago");
});

module.exports = router;
