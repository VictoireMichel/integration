const Plants = require("../models/modelPlants");

exports.getAll = function(req, res) {
    Plants.findAll()
        .then((results) => res.json(results))
        .catch(error => res.status(400).json({error}));
};

