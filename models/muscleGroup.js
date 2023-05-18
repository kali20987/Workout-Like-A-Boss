const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MuscleGroup extends Model {}

MuscleGroup.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    muscleGroup: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'musclegroup',
  }
);

module.exports = MuscleGroup;

