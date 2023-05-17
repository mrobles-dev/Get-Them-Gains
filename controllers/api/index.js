const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const weightRoutes = require('./weightRoutes');
const sleepRoutes = require('./sleepRoutes');
const waterRoutes = require('./waterRoutes');
const weightRoutes = require('./weightRoutes');
const workoutsRoutes = require("./workouts");


router.use('/users', userRoutes);
// router.use('/weight', weightRoutes);
router.use('/sleep', sleepRoutes);
router.use('/water', waterRoutes);
router.use('/weight', weightRoutes);
router.use('/workouts', workoutsRoutes)

module.exports = router;
