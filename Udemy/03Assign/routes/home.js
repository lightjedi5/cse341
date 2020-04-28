const path = require('path')
const express = require('express')
const home = express.Router()

//custom modules
const rootDir = require('../path/path')
home.get('/', (req,res)=>{
    console.log("In home")
    res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports = home