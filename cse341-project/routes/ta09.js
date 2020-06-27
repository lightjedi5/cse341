const express = require('express');
const router = express.Router()
const fetch = require('node-fetch');

router.get('/', (req, res, next) => {
    var data = [];
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
    .then(response => response.json())
    .then(function(pokeData){
        console.log(pokeData.results)
        res.render('pages/ta09', {
            data: pokeData.results
        });
    });
    
})



module.exports = router