const http = require('http');
const express = require('express')
const bodParser = require('body-parser')
const path = require('path')

const adminRoutes = require('./routes/admin')
const shopView = require('./routes/shop')
const util = require('./util/path')
//const routes = require('./routes'); //custom module

const app = express()

app.use(bodParser.urlencoded({extended: false}))
app.use(express.static(path.join(util, 'public')))

app.use('/admin',adminRoutes)
app.use(shopView)

app.use((req, res, next) => {
    res.status(404).sendfile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)
