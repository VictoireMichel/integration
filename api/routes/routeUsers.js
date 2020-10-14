const express = require('express');
const router = express.Router();
const ctrUsers = require("../controllers/controllerUsers");

// Get All route
router.get("/all", (req, res)  => ctrUsers.getAll(req, res));
//Get One route
router.get("/one", (req, res)  => ctrUsers.getOne(req, res));

module.exports = router;
