const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    exerciseTitle: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },
    musclegroupId: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: 'musclegroup',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout',
  }
);

module.exports = Workout;