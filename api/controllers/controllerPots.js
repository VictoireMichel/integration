const Pots = require("../models/modelPots");

exports.getAll = function(req, res) {
    Pots.findAll()
        .then(results => res.json(results))
        .catch(error => res.status(400).json({error}));
};

exports.getOne = function(req, res) {
    Pots.findAll({
        where: {
            id: req.query.id
        }
    })
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error));
};

exports.getDayCount = function(req, res) {
    Pots.findAll({
        attributes: [
            'dayCount',
        ],
        where: {
            id: req.query.id
        }
    })
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error));
};