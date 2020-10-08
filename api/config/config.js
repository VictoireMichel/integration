const {Sequelize, Model, DataTypes} = require("sequelize");
const db = require("./db");
const sequelize = new Sequelize(db);
module.exports = {sequelize : sequelize};
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error));


