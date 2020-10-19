const express = require("express");
const app = express();

require('dotenv').config();

///////////////// static files ///////////////////////
const serveStatic = require('serve-static');
app.use('/files', serveStatic('files'));
//////////////////////////////////////////////////////

///////////////// SYNC DB ////////////////////////////
const seq = require("./config/config");
seq.sequelize.sync()
    .then(() => console.log("--\nDatabase synchronized\n--"))
    .catch((error) => console.log("An error occurred while Synchronization.\n", error));
//////////////////////////////////////////////////////

///////////////// Routes /////////////////////////////
const routePlants = require("./routes/routePlants");
const routeFilter = require("./routes/routeFilter");
app.use("/plants", routePlants);
app.use("/filter", routeFilter);
//////////////////////////////////////////////////////

///////////////// ?????? /////////////////////////////
/* simple test pour avoir un rendu sur le '/' lors du déploiement sur Heroku */
const PORT = process.env.PORT || '3000';
app.get('/', (req,res) => {
    res.send('Hello there is a change');
});
//////////////////////////////////////////////////////


app.listen(PORT);
