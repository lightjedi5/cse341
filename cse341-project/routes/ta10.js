const express = require('express');
const router = express.Router();

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = require('../data/ta10-data.json') 

router.get('/', (req, res, next) => {
    res.render('pages/ta10', {
        title: 'Team Activity 10',
        path: '/teamActivities/10',
        data: dummyData 
    });
});

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData);
    console.log("In fetchall")
});

router.post('/insert', (req, res, next) => {
  var name = req.body.name;

  if (dummyData.avengers.find(avenger => avenger.name === name) === undefined) 
      dummyData.avengers.push({'name':name});
    console.log(dummyData)
    res.redirect('/ta10')
});

module.exports = router