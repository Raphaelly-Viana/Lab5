const express = require("express");
const swaggerUi = require("swagger-ui-express");
const app = express();

app.use(express.json());


const calculatorRoutes = require("./Routes/calculatorRoutes");
const friendRoutes = require("./Routes/friendRoutes");
const storeRoutes = require("./Routes/storeRoutes");

app.use("/calculator", calculatorRoutes);
app.use("/friends", friendRoutes);
app.use("/store", storeRoutes);

const swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// frontend
app.use(express.static("public"));

module.exports = app;