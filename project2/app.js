const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const mongooseConnect = require('./util/database/mongoose')

//routes modules
const authRoutes = require('./routes/auth')
const boardRoute = require('./routes/board')
const app = express();

const PORT = process.env.PORT || 5000

app.set('views', path.join(__dirname, 'view'))
    .set('view engine', 'ejs')
    .use(bodyParser.urlencoded({ extended: false }))
    .use(session({
        secret: 'chess',
        resave: false,
        saveUninitialized: false
    }))
    .use((req,res,next) =>{
        res.locals.isAuthenticated = req.session.isLoggedIn
        next()
    })
    .use('', authRoutes)
    .use('', boardRoute)

mongooseConnect((client => {
    //console.log(client)
    app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  }))
