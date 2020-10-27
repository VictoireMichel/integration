const express = require('express');
const router = express.Router();
const ctrUsers = require("../controllers/controllerUsers");
const passport = require("../app");

router.post('/signup', passport.authenticate('local-signup'));

module.exports = router;


