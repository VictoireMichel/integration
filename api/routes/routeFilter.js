const express = require('express');
const router = express.Router();
const ctrFilter = require('../controllers/controllerFilter');

router.get('/search', (req, res) => ctrFilter.searchPlants(req, res));

module.exports = router;
