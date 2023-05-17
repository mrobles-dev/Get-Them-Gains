const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Water extends Model {}

Water.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      //allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ounces: {
      type: DataTypes.INTEGER,
      //allowNull: false
    }
  },
  {
    sequelize,
    // timestamps: false,
    // freezeTableName: true,
    // underscored: true,
    modelName: 'water'
  }
);

module.exports = Water;
