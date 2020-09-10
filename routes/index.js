const { verifyAuth } = require("../middlewares")
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.status(200);
});

router.get('/dashboard', verifyAuth.verifyLogin, (req, res) => {
  res.render('dashboard',{
    user: req.user,
    title: "Dashboard"
  });
});

module.exports = router;
