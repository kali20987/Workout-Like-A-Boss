const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class BB extends Model {};

BB.init({
    id: {
      type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,  
    },
    exercise: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'BB'
}
);

module.exports = BB;