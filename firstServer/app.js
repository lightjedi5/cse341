const http = require('http');
const routes = require('./routes'); //custom module

const server = http.createServer(routes)
server.listen(3000)
