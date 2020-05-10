//TA03 PLACEHOLDER
const express = require('express');
const fs = require('fs')
const request = require('request')
const router = express.Router();

const URL = 'https://byui-cse.github.io/cse341-course/lesson03/items.json'
const options = {json:true}

router.get('/', (req, res, next) => {
    let jsonObj
    request(URL, options, (err, res, body) => {
        if(err){
            return console.log(err)
        }

        if(!err && res.statusCode == 200){
            jsonObj = body
        }
    })
    res.render('pages/ta03', { 
        title: 'Team Activity 03', 
        prods: jsonObj,
        path: '/ta03', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });

})

router.get('/',(req, res, next) => {
    res.render('pages/ta03', { 
        title: 'Team Activity 03', 
        path: '/ta03', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;