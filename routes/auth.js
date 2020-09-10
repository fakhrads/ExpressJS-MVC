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
  
router.post('/signup', auth.passportRegister);

router.get('/logout', auth.logout);

router.post('/signin', auth.passportSignin);



module.exports = router;