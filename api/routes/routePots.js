const express = require('express');
const router = express.Router();
const ctrPots = require("../controllers/controllerPots");

// Get PlantId
router.get("/user", isLoggedIn, (req, res)  => ctrPots.getPotByUserId(req, res));
// Delete one pot
router.delete("/del", (req, res)  => ctrPots.delPot(req, res));
//Add a pot
router.post("/one", (req,res) => ctrPots.onePot(req, res));

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/users/notConnected');

}
