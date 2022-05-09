const { Sequelize, DataTypes } = require('@sequelize/core');
const db = require('../db');

const Role = db.define('role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },
  urgency: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    notEmpty: true,
  },
});

module.exports = Role;
