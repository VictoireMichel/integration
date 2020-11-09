const Users = require("../models/modelUsers");

exports.successConnection = function(req, res) {
    res.json('connection successful');
    //res.render('successConnection');
};

exports.succesCreation = function(req, res){
    res.json('successCreation');
};

exports.takenEmail = function(req, res){
    res.json('takenEmail');
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
