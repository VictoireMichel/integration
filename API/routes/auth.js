const authController = require('../controllers/controllerUsers.js');
const express = require('express');
const router = express.Router();
const ctrUsers = require("../controllers/controllerUsers");
const passport = require("../app");


module.exports = function(app) {

    app.get('/signup', authController.signup);

};
