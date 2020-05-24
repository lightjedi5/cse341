const express = require('express');
const controller = require('../controller/prove05Controller')
const router = express.Router()
const session = require('express-session');

router.use(
    session({
      secret: 'session',
      resave: false,
      saveUninitialized: false,
    })
  );
  /*
router.get('/', controller.init);
router.post('/change-style', controller.changeColor);
router.post('/increment', controller.increment);
router.post('/decrement', controller.decrement);
router.get('/reset', controller.delSession)
*/

module.exports = router