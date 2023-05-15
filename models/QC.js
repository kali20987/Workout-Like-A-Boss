const { Model, DataTypes } = require('sequelize'); // maybe look where is coming from
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class QC extends Model {
  // // checkPassword(loginPw) {
  // //   return bcrypt.compareSync(loginPw, this.password);
  // }
}

QC.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    excersie: {
      type: DataType.STRING,
      allowNull: false,
    },
    
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'QC',
  
);

module.exports = User;

