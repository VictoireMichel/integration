const express = require('express');
const router = express.Router();
const ctrUsers = require("../controllers/controllerUsers");

router.get("/successConnection", ctrUsers.successConnection);
router.get('/successCreation', ctrUsers.succesCreation);
router.get('/takenEmail', ctrUsers.takenEmail);
router.get('/errorConnection', ctrUsers.errorConnection);
router.get('/notConnected', ctrUsers.notConnected);
router.get('/logout',ctrUsers.logout);

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
