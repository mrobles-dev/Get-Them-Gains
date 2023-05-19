const router = require('express').Router();
const {Workouts} = require('../../models');
const withAuth= require('../../utils/auth')




router.post("/", withAuth, async (req, res) => {
  try {
    const newWorkout = await Workouts.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  try {
    const workoutId = req.session.user_id;
    const workoutData = await Workouts.findAll({
      where: {
        user_id: user_id,
      },
    });

    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json(err);
  }
});








module.exports = router;