const express = require('express');
const router = express.Router();
const ctrData = require("../controllers/controllerData");

// Get last route
router.get("/last", (req, res)  => ctrData.getLast(req, res));
// Post data
router.post("/upload", (req, res)  => ctrData.postUpload(req, res));

module.exports = router;
