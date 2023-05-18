const router = require('express').Router();
const { Sleep } = require('../../models');
const withAuth = require('../../utils/auth');

//! Sequelize operator and moment to calculate the difference between two dates
const moment = require('moment');
const { Op } = require('sequelize');



//Add a new sleep to the database
router.post('/', withAuth, async (req, res) => {
  try {
    const newSleep = await Sleep.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSleep);
  } catch (err) {
    res.status(400).json(err);
  }
});


// Find sleep data to display in the tracker
router.get('/sleepData/:id', withAuth, async (req, res) => {
  const user_id = req.params.id;
  const pastWeek = moment().subtract(7, 'days').toDate();
  
  try {
    const sleepData = await Sleep.findAll({
      where: {
        user_id: user_id,
        date: { [Op.gte]: pastWeek },
      },
      attributes: ['date', 'hours'],
      order: [['date', 'ASC']],
    });

    res.json(sleepData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred sending sleep data' });
  }
});



// Delete a sleep record from the database
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const sleepData = await Sleep.findByPk(req.params.id);
    if (!sleepData) {
      res.status(404).json({ message: 'No sleep data found with this id!' });
      return;
    }
    await sleepData.destroy();
    res.status(200).json({ message: 'Sleep data deleted successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;