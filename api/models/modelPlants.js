const seq = require("../config/config");
const Sequelize = seq.Sequelize, Model = seq.Model, sequelize = seq.sequelize, DataTypes = seq.DataTypes;

class Plants extends Model {}

Plants.init({
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
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    growTime: {
        type: DataTypes.INTEGER(3),
        allowNull: false
    },
    monthStart: {
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    monthEnd: {
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    maintenance: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    soil: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    luminosity: {
        type: DataTypes.INTEGER(1),
        allowNull: false
    },
    picturePath: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    humidity: {
        type: DataTypes.INTEGER(3),
        allowNull: false
    },
    temperatureMin: {
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    temperatureMax: {
        type: DataTypes.INTEGER(2),
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'Plants',
});

module.exports = Plants;
