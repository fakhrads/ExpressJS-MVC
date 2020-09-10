const controller = require("../controllers/user.controller");
const { verifyAuth } = require("../middlewares")
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dashboard', verifyAuth.verifyLogin, (req, res) => {
  res.render('dashboard',{
    user: req.user,
    title: "Dashboard"
  });
});
module.exports = router;
