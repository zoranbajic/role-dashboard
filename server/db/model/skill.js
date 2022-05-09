const { Sequelize, DataTypes } = require('@sequelize/core');
const db = require('../db');

const Skill = db.define('skill', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },
});

module.exports = Skill;
