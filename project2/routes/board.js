const express = require('express')

//imports from within project
const controller = require('../controller/board')
const Player = require('../models/users')
const router = express.Router()


router.get('', game)

module.exports = router;