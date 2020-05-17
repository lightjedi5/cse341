const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://greyjedi:hTIYjbE72IiXpFAh@cluster0-amypx.mongodb.net/test?retryWrites=true&w=majority"
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
  };

  const mongoConnect = callback => {
MongoClient
.connect(MONGODB_URL, options)
.then(client => {
    console.log('Connected')
    callback(client)
})
.catch(err => {
    console.log(err)
})
  }

  module.exports = mongoConnect

