const Client = require('./client');
const Contact = require('./contact');
const Role = require('./role');
const Skill = require('./skill');

Client.hasMany(Contact);
Contact.belongsTo(Client);

Client.hasMany(Role);
Role.belongsTo(Client);

Role.belongsToMany(Skill, { through: 'RoleSkills' });
Skill.belongsToMany(Role, { through: 'RoleSkills' });

module.exports = {
  Client,
  Contact,
  Role,
  Skill,
};
