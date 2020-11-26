const Pots = require("../models/modelPots");

exports.getPotByUserId = function(req, res) {
    Pots.findAll({
        where: {
            userId: req.query.userId
        }
    })
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error));
};

exports.delPot = function (req, res) {
    Pots.destroy({
        where:{
            id: req.query.id
        },
        force: true
    })
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error));
};

exports.addPot = function (req, res){
    Pots.create({
            name: req.query.name,
            needWater: req.query.needWater,
            dayCount: req.query.dayCount,
            plantId: req.query.plantId,
            userId: req.query.userId,
    }).then(results => res.json(results))
      .catch(error => res.status(400).json(error));
}
