const router = require('express').Router();
const { User, Weight } = require('../models');
// const { User } = require('../models');
const withAuth = require('../utils/auth');


router.get(['/', '/homepage'], async (req, res) => {
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
  const dbUserData=await User.findByPk(req.session.user_id, {include:[Weight]})
  const user= dbUserData.get({plain:true})
  console.log(user);
  res.render("tracker", {
    logged_in: true,
    user:user,
    weight:user.weights[0],
    user_id: req.session.user_id
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


router.get('/homepage', async (req, res) => {
  res.render('homepage', {
    logged_in: req.session.logged_in
  });
});


router.get("/goals", withAuth, async (req, res) => {

    res.render("goals", {
      logged_in: true,
    });
});


router.get("/workouts", withAuth, async (req, res) => {

  // mini project and reading all



    res.render("workouts", {
      logged_in: true,
    });
});


module.exports = router;