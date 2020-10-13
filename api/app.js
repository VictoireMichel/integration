const express = require("express");
const dotenv = require('dotenv').config();
const app = express();
const seq = require("./config/config");
const modelPlants = require("./models/modelPlants");
const routePlants = require("./routes/routePlants");
app.use("/plants", routePlants);
app.listen(3000);
