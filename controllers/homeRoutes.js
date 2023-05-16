const router = require('express').Router();
// const { User } = require('../models');
const withAuth = require('../utils/auth');


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


router.get("/tracker", withAuth, async (req, res) => {

    res.render("tracker", {
      logged_in: true,
    });
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/tracker");
    return;
  }
  res.render("login");
});

router.get("/homepage", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/tracker");
    return;
  }
  res.render("login");
});

router.get("/goals", withAuth, async (req, res) => {

    res.render("goals", {
      logged_in: true,
    });
});


router.get("/workouts", withAuth, async (req, res) => {

    res.render("workouts", {
      logged_in: true,
    });
});


module.exports = router;