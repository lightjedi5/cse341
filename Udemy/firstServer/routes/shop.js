const path = require('path')
const express = require('express')
const util = require('../util/path')
const shop = express.Router()

shop.get('/',(req, res, next) => {
    res.sendFile(path.join(util, 'views', 'shop.html'))
})

module.exports = shop