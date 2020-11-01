const Users = require("../models/modelUsers");

exports.successConnection = function(req, res) {
    res.render('successConnection');
};

exports.succesCreation = function(req, res){
    res.render('successCreation');
};

exports.takenEmail = function(req, res){
    res.render('takenEmail');
};

exports.errorConnection = function(req, res){
    res.render('errorConnection');
};

exports.notConnected = function(req, res){
    res.render('notConnected');
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.render('endConnection');
    });

}
