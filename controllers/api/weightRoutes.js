const router = require('express').Router();
const { Weight } = require('../../models');
const withAuth = require('../../utils/auth');

const moment = require('moment');
const { Op } = require('sequelize');

router.post('/', withAuth, async (req, res) => {
    try {
      const newWeight = await Weight.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newWeight);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/weight/:id', withAuth, async (req, res) => {
    const userId = req.params.id;
  });
  module.exports = router;