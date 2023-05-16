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
    // startWeight:{
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: 'user',
    //       key: 'startingWeight',
    //     },
    // },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    weightGoal:{
        type: DataTypes.INTEGER,
    },
    currentWeight:{
        type: DataTypes.INTEGER,
    }
},
{ sequelize,
    modelName:'weight'}
);
module.exports = Weight;