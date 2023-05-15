const router = require('express').Router();
const { Water } = require('../../models');
const withAuth = require('../../utils/auth');

// const moment = require('moment');
// const { Op } = require('sequelize');


// Add water intake to the database
router.post('/', withAuth, async (req, res) => {
  try {
    const newWaterIntake = await Water.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWaterIntake);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Find water data to display in the tracker
router.get('/', withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id;
    const today = moment().format('YYYY-MM-DD');
    const waterIntakeData = await Water.findAll({
      where: {
        user_id: userId,
        date: today
        // date: {
        //   [Op.between]: [startDate, endDate]
        // }
      }
    });

    res.status(200).json(waterIntakeData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete any water data from the database
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const waterIntakeId = req.params.id;
    const userId = req.session.user_id;

    const deletedWaterIntake = await Water.destroy({
      where: {
        id: waterIntakeId,
        user_id: userId
      }
    });

    if (!deletedWaterIntake) {
      res.status(404).json({ message: 'No water intake entry found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Water intake entry deleted successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;