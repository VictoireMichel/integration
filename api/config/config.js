const {Sequelize, Model, DataTypes} = require("sequelize");
const db = require("./db");
const sequelize = new Sequelize(db);

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error));

let seq  = {};
seq.sequelize = sequelize;
seq.Sequelize = Sequelize;
seq.Model = Model;
seq.DataTypes = DataTypes;
module.exports = seq;
