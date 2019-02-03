const Sequelize = require('sequelize');
const config = require('./configs/db');

const sequelize = new Sequelize(config.name, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: 5
  },
  dialectOptions: {
    ssl: config.ssl
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = { sequelize, Sequelize };
