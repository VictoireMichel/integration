const seq = require("../config/config");
const Sequelize = seq.Sequelize, Model = seq.Model, sequelize = seq.sequelize, DataTypes = seq.DataTypes;

class Users extends Model {}

Users.init({
    id: {
        type: DataTypes.INTEGER('4'),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    mail: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    firstName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    lastName: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    needWater: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    dayCount: {
        type: DataTypes.INTEGER('5'),
        allowNull: true
    },
    learningMode: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    plantId: {
        type: DataTypes.INTEGER('4'),
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Users',
});

module.exports = Users;

Users.sync()
    .then(() => console.log("Synchronisation users réussie !"))
    .catch((error) => console.log("Erreur synchronisation users !", error));
