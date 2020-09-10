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

exports.passportRegister = (req, res) => {
  passport.authenticate('local-signup', {
    successRedirect: '/home',
    failureRedirect: '/signup'
  });
};