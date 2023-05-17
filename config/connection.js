const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

//needed to deploy database to the internet
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {

  //sequlize call to connect to my database in my computer.
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    '',
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306
    }
  )
};

module.exports = sequelize;