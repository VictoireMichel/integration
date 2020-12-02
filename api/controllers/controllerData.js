const Data = require("../models/modelData");
const seq = require("../config/config");
const Sequelize = seq.Sequelize, sequelize = seq.sequelize;

exports.getLast = function(req, res) {
     sequelize.query('select dataLuminosity, dataHumidity, dataTemperature, timeStamp from Data where id = (SELECT max(id) from Data where potId = ' + req.query.potId + ' group by potId)')
        .then(results => res.json(results[0]))
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

exports.humidityThreshold = function(req, res) {
    sequelize.query('select humidity from Plants where id = (select plantId from pots where id = '+ req.query.potId +')')
    .then(results => res.json(results))
    .catch(error => res.status(400).json(error));
};
