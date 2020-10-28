const authController = require('../controllers/controllerUsers.js');

module.exports = function(app) {

    app.get('/signup', authController.signup);

};