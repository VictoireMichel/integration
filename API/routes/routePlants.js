const express = require('express');
const router = express.Router();
const ctrPlants = require("../controllers/controllerPlants");

// Get All route
router.get("/all", (req, res)  => ctrPlants.getAll(req, res));
//alala 

module.exports = router;
