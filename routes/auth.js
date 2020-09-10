var express = require('express');
var router = express.Router();
const passport = require('passport');
const auth = require("../controllers/auth.controller");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', auth.signup);

router.get('/signin', auth.signin);
  router.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/dashboard',
      failureRedirect: '/auth/signup',
      failureFlash : true
    })
  );

router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.redirect('/');
  });
});

router.post(
  '/signin',
  passport.authenticate('local-signin', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/signin',
    failureFlash : true
  })
);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
    res.redirect('/signin');
  }

module.exports = router;