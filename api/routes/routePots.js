const express = require('express');
const router = express.Router();
const ctrPots = require("../controllers/controllerPots");

// Get All route
router.get("/all", (req, res)  => ctrPots.getAll(req, res));
// Get One route
router.get("/one", (req, res)  => ctrPots.getOne(req, res));
// Get DayCount
router.get("/dayCount", (req, res)  => ctrPots.getDayCount(req, res));
// Delete one pot
router.delete("/del", (req, res)  => ctrPots.delPot(req, res));
module.exports = router;
