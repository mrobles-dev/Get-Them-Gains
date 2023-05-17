const sequelize = require('../config/connection');
const { User, Sleep } = require('../models');
const { Weight } = require('../models')
const { Water } = require('../models')

const userData = require('./userData.json');
const sleepData = require('./sleepData.json');
const weightData = require('../weightData.json')
const waterData = require('../sleepData.json')
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const sleep of sleepData) {
    await Sleep.create({
      ...sleep
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const weight of weightData) {
    await Weight.create({
      ...weight
    });
  }
  for (const water of waterData) {
    await water.create({
      ...water
    });
  }
  process.exit(0);
};

seedDatabase();