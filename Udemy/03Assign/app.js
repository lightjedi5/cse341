const express = require('express')
const path = require('path')
const app = express()

//custom modules
const home = require('./routes/home')
const users = require('./routes/users')
const rootDir = require('./path/path')

app.use(express.static(path.join(rootDir, 'public')))
app.use(users)
app.use(home)

app.listen(3000)
