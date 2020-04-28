var http = require('http')
var routes = require('./router')

const server = http.createServer(routes)
server.listen(3000)