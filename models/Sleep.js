const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sleep extends Model {}

Sleep.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hours: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName:'sleep'
  }
);

module.exports = Sleep;