const express = require("express");
const app = express();

//middleware
app.use(express.json());


const calculatorRoutes = require("./Routes/calculatorRoutes");

app.use("/calculator", calculatorRoutes);

module.exports = app; 