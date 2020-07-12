const express = require('express')
const Player = require('../models/users')
const router = express.Router()

game = (req, res, next) => {
    res.render('pages/board', {
        path: '/gameBoard',
        pageTitle: 'Game Board'
    })
}

module.exports = router