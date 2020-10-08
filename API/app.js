const express = require("express");
const dotenv = require('dotenv').config();
const app = express();
const config = require("./config/config");
const modelPlants = require("./models/modelPlants");
const modelUsers = require("./models/modelUsers");
app.listen(3000);
