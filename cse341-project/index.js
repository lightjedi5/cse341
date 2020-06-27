/*******************************************************************************
 * Feel free to remove this comment block and all other comments after pulling. 
 * They're for information purposes only.
 * 
 * This layout is provided to you for an easy and quick setup to either pull
 * or use to correct yours after working at least 1 hour on Team Activity 02.
 * Throughout the course, we'll be using Express.js for our view engines.
 * However, feel free to use pug or handlebars ('with extension hbs'). You will
 * need to make sure you install them beforehand according to the reading from
 * Udemy course. 
 * IMPORTANT: Make sure to run "npm install" in your root before "npm start"
 *******************************************************************************/
// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000
const cors = require('cors') // Place this with other requires (like 'path' and 'express')
const mongoose = require('mongoose')

//custom modules
const mongoConnect = require('./util/database') //util that connects to mongo database
const mongooseConnect = require('./util/mongoose')
const app = express();

// Route setup. You can implement more in the future!
const ta01Routes = require('./routes/ta01');
const ta02Routes = require('./routes/ta02');
const ta03Routes = require('./routes/ta03'); 
const ta04Routes = require('./routes/ta04');
const ta05Routes = require('./routes/ta05')
const ta06Routes = require('./routes/ta06')
const ta09Routes = require('./routes/ta09')
const ta10Routes = require('./routes/ta10') 
const prove02Routes = require('./routes/prove02')
const prove03 = require('./routes/prove03')
const prove05Routes = require('./routes/prove05')
const prove06Routes = require('./routes/prove06')

app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   // For view engine as Pug
   //.set('view engine', 'pug') // For view engine as PUG. 
   // For view engine as hbs (Handlebars)
   //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
   //.set('view engine', 'hbs')
   .use(bodyParser({extended: false})) // For parsing the body of a POST
   .use('/ta01', ta01Routes)
   .use('/ta02', ta02Routes) 
   //.use('/ta03', ta03Routes) 
   .use('/ta04', ta04Routes)
   .use('/ta05', ta05Routes)
   .use('/ta06', ta06Routes)
   .use('/prove02', prove02Routes)
   .use('/prove03', prove03)
   .use('/prove05', prove05Routes)
   .use('/prove06', prove06Routes)
   .use('/ta09', ta09Routes)
   .use('/ta10', ta10Routes)
   .get('/', (req, res, next) => {
     // This is the primary index, always handled last. 
     res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
    })
   .use((req, res, next) => {
     // 404 page
     res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
   })
   //.listen(PORT, () => console.log(`Listening on ${ PORT }`));


const corsOptions = {
  origin: "https://thawing-crag-55540.herokuapp.com/",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions)); //setting up heroku

//connects to mongo database with moongoose by using a callback function. code is in ./util/mongoose.js
mongooseConnect((client => {
  //console.log(client)
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
}))

