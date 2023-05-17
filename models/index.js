const User = require('./User');

const Sleep = require('./Sleep');
const Weight= require('./Weight');
const Water= require('./Water');
const Workouts= require('./Workouts');

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

User.hasMany(Workouts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Workouts.belongsTo(User, {
  foreignKey: 'user_id'
});








module.exports = {User, Workouts, Sleep, Weight, Water};
