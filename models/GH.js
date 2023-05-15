const { Model, Datatype } = require('sequelize');
const sequelize = require('../config/connection');

class GH extends Model {};

GH.init({
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
    modelName: 'GH'
}
);

module.exports = GH;
