const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CC extends Model {}

CC.init(
  {
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
    instraction: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'CC',
  }
);

module.exports = CC;
