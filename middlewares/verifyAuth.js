const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

verifyLogin = (req, res, next) => {
  if (req.isAuthenticated()) return next();
    req.flash('error','Harap login terlebih dahulu')
    res.redirect('/auth/signin');
}
const verifyAuth = {
    verifyLogin: verifyLogin
};

module.exports = verifyAuth;