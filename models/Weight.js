const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weight extends Model { }

Weight.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  currentWeight: {
    type: DataTypes.INTEGER,
  },
  weightGoal: {
    type: DataTypes.INTEGER,
  },
},
  {
    sequelize,
    modelName: 'weight'
  }
);

module.exports = Weight;