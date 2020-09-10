const { verifyAuth } = require("../middlewares")
const controller = require("../controllers/jobs.controller")
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('jobs', { 
      title: 'Jobs Seeker',
      subtitle: 'Jobs List',
      user: req.user 
    });
});

router.get('/create',function(req, res, next) {
  res.render('jobs/create', { 
      title: 'Jobs Seeker',
      subtitle: 'Create Jobs', 
      user: req.user 
    });
});

router.post('/create',controller.create);

module.exports = router;
