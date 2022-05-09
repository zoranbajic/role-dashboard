const { Sequelize, DataTypes } = require('@sequelize/core');
const db = require('../db');

const Contact = db.define('contact', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
    isEmail: true,
  },
});

module.exports = Contact;
