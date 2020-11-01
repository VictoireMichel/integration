const express = require('express');
const router = express.Router();
const ctrPots = require("../controllers/controllerPots");

// Get All route
router.get("/all", isLoggedIn, (req, res)  => ctrPots.getAll(req, res));
// //Get One route
router.get("/one", (req, res)  => ctrPots.getOne(req, res));

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/users/notConnected');

}
