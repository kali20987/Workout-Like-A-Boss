const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class ReviewContent extends Model{}

ReviewContent.init(
{
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  reviewcontent: {
    type: DataTypes.TEXT,
    allowNull: false
  },
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'reviewcontent',
}
);

module.exports = ReviewContent;

