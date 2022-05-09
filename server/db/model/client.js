const { Sequelize, DataTypes } = require('@sequelize/core');
const db = require('../db');

const Client = db.define('client', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },
});

module.exports = Client;
