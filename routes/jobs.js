const { verifyAuth } = require("../middlewares")
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jobs', { 
      title: 'Jobs Seeker',
      subtitle: 'Jobs List' 
    });
});


module.exports = router;
