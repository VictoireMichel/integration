const seq = require("../config/config");
const Sequelize = seq.Sequelize, Model = seq.Model, sequelize = seq.sequelize, DataTypes = seq.DataTypes;
const Pots = require("./modelPots");
class Data extends Model {}

Data.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    dataLuminosity:{
        type: DataTypes.INTEGER(3),
        allowNull: false
    },
    dataHumidity:{
        type: DataTypes.INTEGER(3),
        allowNull: false
    },
    dataTemperature:{
        type: DataTypes.DECIMAL(2,2),
        allowNull: false
    },
    timeStamp:{
        type: DataTypes.DATE,
        allowNull: false
    },
    potId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Pots,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Data',
});

module.exports = Data;
