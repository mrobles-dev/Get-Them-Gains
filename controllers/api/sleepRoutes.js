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


//Find sleep data to display in the tracker
router.get('/sleep/:id', withAuth, async (req, res) => {
  const userId = req.params.id;
  const startDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
  const endDate = moment().format('YYYY-MM-DD');
  const sleepData = await Sleep.findAll({
    where: {
      userId: userId,
      date: {
        [Op.between]: [startDate, endDate]
      }
    }
  }).map(entry => {
    return {
      date: entry.date,
      hours: entry.hours
    };
  });
  res.render('sleep', { sleepData });
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