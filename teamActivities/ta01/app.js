const http = require('http')
const requestHandler = require('./router')

const server = http.createServer(requestHandler)

server.listen(3000)