const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database/database4.db'
  })
 
module.exports = sequelize;