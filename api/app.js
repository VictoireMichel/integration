const express = require("express");
const dotenv = require('dotenv').config();
const app = express();
const seq = require("./config/config");
const modelPlants = require("./models/modelPlants");
const routePlants = require("./routes/routePlants");
app.use("/plants", routePlants);

/* simple test pour avoir un rendu sur le '/' lors du déploiement sur Heroku */
app.get('/', (req,res) => {
    res.send('Changed');
})

app.listen(3000);
