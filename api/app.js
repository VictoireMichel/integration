const express = require("express");
const app = express();

require('dotenv').config();

const session = require('express-session');

///////////////// Views ///////////////////////////
const exphbs = require('express-handlebars');


//For Handlebars
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('views', './views');

app.set('view engine', '.hbs');
//////////////////////////////////////////////////////


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
const routePots = require("./routes/routePots");
app.use("/plants", routePlants);
app.use("/filter", routeFilter);
app.use("/users", routeUsers);
app.use("/pots", routePots);
//////////////////////////////////////////////////////

///////////////// ?????? /////////////////////////////
/* simple test pour avoir un rendu sur le '/' lors du déploiement sur Heroku */
const PORT = process.env.PORT || '3000';
app.get('/', (req,res) => {
    res.send('Hello, there has been a change since last time');
});
//////////////////////////////////////////////////////

app.listen(PORT);
