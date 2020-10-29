const express = require('express');
const router = express.Router();
const ctrUsers = require("../controllers/controllerUsers");
const passport = require("../app");

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/users/dashboard',
    failureRedirect: '/users/signup'
}));

router.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/users/dashboard',

        failureRedirect: '/users/signin'
    }

));

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.redirect('/users/signin');

}

module.exports = router;


