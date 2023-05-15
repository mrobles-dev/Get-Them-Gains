const User = require('./User');
const Sleep = require('./Sleep');

User.hasMany(Sleep, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Sleep.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Sleep };