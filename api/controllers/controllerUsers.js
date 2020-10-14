const Users = require("../models/modelUsers");

exports.getAll = function(req, res) {
    Users.findAll()
        .then(results => res.json(results))
        .catch(error => res.status(400).json({error}));
};

exports.getOne = function(req, res) {
    Users.findAll({
        where: {
            id: req.query.id
        }
    })
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error));
};
