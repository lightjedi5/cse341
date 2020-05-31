const data = "../data/ta06data.json"
const fs = require('fs')

products = []
/*
fs.readFile(data, (err, data) => {
    if(err) throw err
    
})
*/
exports.getProducts = (req, res, next) => {
    fs.readFile(data, (err, data) => {
        if(err) throw err

    })
}