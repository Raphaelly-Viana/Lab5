const express = require("express");
const app = express();
const mathRoutes = require("./CalculatorRoutes");

app.use("/", mathRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
