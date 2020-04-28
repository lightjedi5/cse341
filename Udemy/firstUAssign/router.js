const fs = require('fs');

const requestHandler = (request, response) =>{
    let url = request.url

    if(url === "/"){
        response.write('<html><header><title>Greetings Adventurer</title></header><body><h1>Greetings Adventurer!</h1></body></html>')
    }
    if(url === "/users"){
        response.write('<html><header><title>Item Shop</title></header><body><h1>Welcome to the Item Shop</h1><div><table><tr><th>Item</th><th>Cost</th></tr><tr><td>Health Potion</td><td>$5.99</td></tr></table></div></body></html>')
    }
}

module.exports = requestHandler