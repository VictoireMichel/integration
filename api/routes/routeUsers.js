const express = require('express');
const router = express.Router();
const ctrUsers = require("../controllers/controllerUsers");
const passport = require("../app");

router.get("/successConnection", ctrUsers.successConnection);
router.get('/successCreation', ctrUsers.succesCreation);
router.get('/takenEmail', ctrUsers.takenEmail);
router.get('/errorConnection', ctrUsers.errorConnection);
router.get('/notConnected', ctrUsers.notConnected);
router.get('/logout',isLoggedIn, ctrUsers.logout);
router.get('/getLearningMode',(req,res) => ctrUsers.getLearningMode(req,res));
router.patch('/updateLearningMode', (req,res) => ctrUsers.updateLearningMode(req, res));
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/users/successCreation',
    failureRedirect: '/users/takenEmail'
}));
router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/users/successConnection',
    failureRedirect: '/users/errorConnection'
}));

router.delete('/one', (req, res) => ctrUsers.deleteOne(req, res));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/users/notConnected');

}

module.exports = router;
