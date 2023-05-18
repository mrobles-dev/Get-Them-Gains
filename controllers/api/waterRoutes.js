const router = require('express').Router();
const { Water } = require('../../models');
const withAuth = require('../../utils/auth');

//! Required for Tracker Display
const moment = require('moment');
const { Op } = require('sequelize');


// Add water intake to the database
router.post('/', withAuth, async (req, res) => {
  try {
    console.log('ding')
    const newWaterIntake = await Water.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWaterIntake);
    console.log('cake')

  } catch (err) {
    res.status(400).json(err);
  }
});

// Find water data to display in the tracker
router.get('/waterData/:id', withAuth, async (req, res) => {
  const user_id = req.params.id;
  const pastWeek = moment().subtract(7, 'days').toDate();

  try {
    const waterData = await Water.findAll({
      where: {
        user_id: user_id,
        date: { [Op.gte]: pastWeek },
      },
      attributes: ['date', 'ounces'],
      order: [['date', 'ASC']],
    });
    
    console.log(waterData);

    res.json(waterData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred sending water data' });
  }
});

// Delete any water data from the database
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const waterIntakeId = req.params.id;
    const user_id = req.session.user_id;

    const deletedWaterIntake = await Water.destroy({
      where: {
        id: waterIntakeId,
        user_id: user_id
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
