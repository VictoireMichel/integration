const express = require('express');
const router = express.Router();
const ctrPlants = require("../controllers/controllerPlants");

// Get All route
router.get("/all", (req, res)  => ctrPlants.getAll(req, res));
//Get One route
router.get("/one", (req, res)  => ctrPlants.getOne(req, res));

module.exports = router;
