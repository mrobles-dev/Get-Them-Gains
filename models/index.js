const User = require('./User');

const Sleep = require('./Sleep');
const Weight= require('./Weight');
const Water= require('./Water');

User.hasMany(Sleep, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Sleep.belongsTo(User, {
  foreignKey: 'user_id'
});


User.hasMany(Weight, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Weight.belongsTo(User, {
  foreignKey: 'user_id'
});


User.hasMany(Water, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Water.belongsTo(User, {
  foreignKey: 'user_id'
});








module.exports = { User, Sleep };
module.exports = { User, Weight };
module.exports = { User, Water };