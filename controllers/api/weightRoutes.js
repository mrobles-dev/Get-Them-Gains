const router = require('express').Router();
const { Weight } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newWeight = await Weight.create({
        ...req.body,
        userId: req.session.user_id,
      });
  
      res.status(200).json(newWeight);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/', withAuth, async (req, res) => {
    try {
      const userId = req.session.user_id;
      const weightData = await Weight.findAll({
        where: {
          user_id: userId,
        }
      });
      
      res.status(200).json(weightData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const weightId = req.params.id;
      const userId = req.session.user_id;
  
      const deletedWeightIntake = await Weight.destroy({
        where: {
          id: weightId,
          user_id: userId
        }
      });
  
      if (!deletedWeightIntake) {
        res.status(404).json({ message: 'No weight intake entry found with this id!' });
        return;
      }
  
      res.status(200).json({ message: 'Weight intake entry deleted successfully!' });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;