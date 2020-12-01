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

exports.onePot = function (req, res){
    Pots.create({
            name: req.body.name,
            needWater: req.body.needWater,
            dayCount: req.body.dayCount,
            plantId: req.body.plantId,
            userId: req.body.userId,
    }).then(results => res.json(results))
      .catch(error => res.status(400).json(error));
}
