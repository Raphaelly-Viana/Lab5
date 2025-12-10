const express = require("express");
const friendRoutes = require('./routes/friendRoutes');

const app = express();
app.use(express.json());

app.use("/", express.static("public"));
app.use("/friends", friendRoutes);
app.use("/calculator", calculatorRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});