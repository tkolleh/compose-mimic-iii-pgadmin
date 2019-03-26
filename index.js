const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('mimic', 'mimic', 'password', {
  host: 'localhost',
  dialect: postgres/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
