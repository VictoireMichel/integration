const Data = require("../models/modelData");

exports.getLast = function(req, res) {
    Data.findAll({
        attributes: [
            'dataLuminosity','dataHumidity', 'dataTemperature', 'timeStamp'
        ],
        where: {
            potId: req.query.potId
        }
    })
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error));
};

exports.postUpload = function(req, res) {
    Data.findOrCreate({
        where: {id: 0},
        defaults: {
            dataLuminosity: req.body.dataLuminosity,
            dataHumidity: req.body.dataHumidity,
            dataTemperature: req.body.dataTemperature,
            timeStamp: req.body.timeStamp,
            potId: req.body.potId
        }
    })
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error));
};