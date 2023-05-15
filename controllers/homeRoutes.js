const router = require('express').Router();
// const { User } = require('../models');
const withAuth = require('../utils/auth');


// router.get('/', async (req, res) => {
//   try {
//     // Pass session flag into template
//     res.render('homepage', { 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/', async (req, res) => {
  res.render('homepage', {
    logged_in: req.session.logged_in 
  });
});

router.get('/register', (req, res) => {
  // If the user is already logged in, redirect the request to tracker page
  if (req.session.logged_in) {
    res.redirect('tracker');
    return;
  }

  res.render('register');
});

module.exports = router;