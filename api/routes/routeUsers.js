const express = require('express');
const router = express.Router();
const ctrUsers = require("../controllers/controllerUsers");
const passport = require("../app");

router.get("/successConnection", ctrUsers.successConnection);
router.get('/successCreation', ctrUsers.succesCreation);
router.get('/takenEmail', ctrUsers.takenEmail);
router.get('/errorConnection', ctrUsers.errorConnection);
router.get('/notConnected', ctrUsers.notConnected);
router.get('/logout',ctrUsers.logout);
router.patch('/updateLearningMode', (req,res) => ctrUsers.updateLearningMode(req, res))
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/users/successCreation',
    failureRedirect: '/users/takenEmail'
}));

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/users/successConnection',
    failureRedirect: '/users/errorConnection'
}));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/users/notConnected');

}

module.exports = router;
