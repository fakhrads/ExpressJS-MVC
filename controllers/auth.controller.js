const db = require("../models");
const passport = require('passport');
const config = require("../lib/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.signin = (req, res) => {
  res.render('auth/login');
};

exports.signup = (req, res) => {
  res.render('auth/register');
};

exports.passportRegister = passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/signup',
    failureFlash : true
});

exports.passportSignin = passport.authenticate('local-signin', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/signin',
    failureFlash : true
});

exports.logout = (req, res) => {
  req.session.destroy(err => {
    res.redirect('/');
  });
};