const express = require("express");
const app = express();

//middleware
app.use(express.json());


const calculatorRoutes = require("../routes/calculatorRoutes");

app.use("/calculator", calculatorRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; 