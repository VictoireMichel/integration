const Pots = require("../models/modelPots");

exports.getPotByUserId = function(req, res) {
    Pots.findAll({
        where: {
            userId: req.query.userId
        }
    })
        .then(results => {
            let createdAt = new Date(results[0].createdAt);
            let now = new Date(Date.now());
            let diff = now - createdAt;
            let diffDays =  Math.trunc(diff /(1000*60*60*24));
            console.log(diffDays);
            results[0].dayCount = diffDays;
            res.send(results);
        })
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
};
