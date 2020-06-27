const express = require('express')
const feedRouters = require('./routes/feed')
const bodyParser = require('body-parser')

const app = express()

//app.use(bodyParser.urlencoded())
app.use(bodyParser.json()) //parses json data

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Accoess-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})
app.use('/feed',feedRouters)

app.listen(8080)