const path = require('path')
const express = require('express')
const util = require('../util/path')
const router = express.Router()

router.get('/add-product',(req, res, next) => {
    //res.status(404).sendFile('/Users/jerry/cse341/Udemy/firstServer/views/add-product.html')
    res.sendFile(path.join(util, 'views', 'add-product.html'))
})

router.post('/product', (req, res, next)=> {
    res.redirect('/')
})

module.exports = router