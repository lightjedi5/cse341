const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const mongooseConnect = require('./util/database/mongoose')

//routes modules
const authRoutes = require('./routes/auth')
const app = express();

const PORT = process.env.PORT || 5000

app.set('views', path.join(__dirname, 'view'))
    .set('view engine', 'ejs')
    .use('', authRoutes)

mongooseConnect((client => {
    //console.log(client)
    app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  }))
