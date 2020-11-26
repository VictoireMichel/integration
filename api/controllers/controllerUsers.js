const Users = require("../models/modelUsers");

exports.successConnection = function(req, res) {
    //res.json('connection successful');
    //res.render('successConnection');
    Users.findAll({
        attributes: [
            'id',
        ],
        where: {
            id: req.user.id
        }
    })
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error));
};

exports.succesCreation = function(req, res){
    res.json('successCreation');
};

exports.takenEmail = function(req, res){
    res.json(req, res);
};

exports.errorConnection = function(req, res){
    res.json('email/password incorrect');
};

exports.notConnected = function(req, res){
    res.json('notConnected');
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.json('endConnection');
    });

}

exports.updateLearningMode = function(req, res) {
    Users.update(
        { learningMode: req.query.learningMode},
        { where: { id: req.query.id } }
      ).then(results => res.json(results))
      .catch(error => res.status(400).json(error));
}
