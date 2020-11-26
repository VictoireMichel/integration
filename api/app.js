const express = require("express");
const app = express();

require('dotenv').config();
const path = require('path');
const session = require('express-session');

///////////////// Passport ///////////////////////////
const passport = require('passport');
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
const modelUsers = require('./models/modelUsers');
require('./config/passport.js')(passport, modelUsers);
module.exports = passport;
//////////////////////////////////////////////////////

///////////////// Body-parser ////////////////////////
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//////////////////////////////////////////////////////

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
const routeUsers = require("./routes/routeUsers");
const routeData = require("./routes/routeData");
const routePots = require("./routes/routePots");

app.use("/plants", routePlants);
app.use("/filter", routeFilter);
app.use("/users", routeUsers);
app.use("/data", routeData);

app.use("/pots", routePots);
//////////////////////////////////////////////////////

///////////////// ?????? /////////////////////////////
/* Page HTML avec formulaire pour tester la requête POST pour l'ajout d'un pot */
const PORT = process.env.PORT || '3000';
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});
//////////////////////////////////////////////////////

app.listen(PORT);
