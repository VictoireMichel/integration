const express = require('express');
const router = express.Router();
const ctrData = require("../controllers/controllerData");

// Get All route
router.get("/all", (req, res)  => ctrData.getAll(req, res));
//Get One route
router.get("/one", (req, res)  => ctrData.getOne(req, res));

module.exports = router;
