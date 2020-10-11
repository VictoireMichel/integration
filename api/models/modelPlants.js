const seq = require("../config/config");
const Sequelize = seq.Sequelize, Model = seq.Model, sequelize = seq.sequelize, DataTypes = seq.DataTypes;

class Plants extends Model {}

Plants.init({
    id: {
        type: DataTypes.INTEGER('4'),
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
        type: DataTypes.INTEGER('3'),
        allowNull: false
    },
    monthStart: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    monthEnd: {
        type: DataTypes.TEXT,
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
        type: DataTypes.INTEGER('1'),
        allowNull: false
    },
    picturePath: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    humidity: {
        type: DataTypes.INTEGER('3'),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Plants',
});

module.exports = Plants;

Plants.sync()
    .then(() => console.log("Synchronisation plants réussie !"))
    .catch((error) => console.log("Erreur synchronisation plants !", error));



