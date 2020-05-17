const mongoose = require('mongoose')
const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://greyjedi:hTIYjbE72IiXpFAh@cluster0-amypx.mongodb.net/test?retryWrites=true&w=majority"

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    family: 4
  };
  
  const mongooseConnect = callback => {
    mongoose
    .connect(
        MONGODB_URL, options
      )
    .then(client => {
        // This should be your user handling code implement following the course videos
        console.log('Connected via mongoose')
        callback(client)
    })
    .catch(err => {
        console.log(err)
    })
  } 

  module.exports = mongooseConnect