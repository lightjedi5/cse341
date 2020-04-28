const path = require('path')
const express = require('express')
const users = express.Router()

//custom modules
const rootDir = require('../path/path')
users.get('/users', (req,res)=>{
    console.log("In /users")
    res.sendFile(path.join(rootDir, 'views', 'users.html'))
})

module.exports = users