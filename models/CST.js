const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CST extends Model {};

CST.init({
    id: {
        type: Datatype.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    exercise: {
        type: Datatype.STRING,
        allowNull: false,
    },
    instructions: {
        type: Datatype.TEXT,
        allowNull: false,
    },
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'CST'
}
);

module.exports = CST;
