const seq = require("../config/config");
const Sequelize = seq.Sequelize, Model = seq.Model, sequelize = seq.sequelize, DataTypes = seq.DataTypes;
const Plants = require("./modelPlants");
const Users = require("./modelUsers");
class Pots extends Model {}

Pots.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    needWater: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    dayCount: {
        type: DataTypes.INTEGER('5'),
        allowNull: true
    },
    plantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Plants,
            key: 'id'
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Pots',
});

module.exports = Pots;
