

const express = require('express');
const Exercise1 = require("./Routes/Exercise1")
const Exercise2 = require("./Routes/Exercise2");

const app = express();



app.get('/', (req, res) => {
  res.send('Hello! This app is listening on multiple ports.');
});

app.use('/', Exercise1)
app.use("/2", Exercise2);
app.use(express.static("./public"));

// Multiple ports
const ports = [8080, 5050];

// Loop to listen on multiple ports
ports.forEach(port => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});




