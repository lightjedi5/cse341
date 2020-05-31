const express = require('express')
const controller = require('../controller/prove06Controller')
const router = express.Router()
const session = require('express-session')
const { check } = require('express-validator/check')

router.use(
    session({
      secret: 'session',
      resave: false,
      saveUninitialized: false,
    })
  );

router.get('/', controller.validate)
router.post('/signup', check('email', "Enter Valid Email Address").isEmail(), check('password', "password must be lower case").isLowercase(), controller.validate);

//router.post('/signup', controller.signUp)


  /*
router.get('/', controller.init);
router.post('/change-style', controller.changeColor);
router.post('/increment', controller.increment);
router.post('/decrement', controller.decrement);
router.get('/reset', controller.delSession)
*/

module.exports = router