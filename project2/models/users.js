const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    resetToken: {
        type: String,
        required: false
    },
    resetTokenExpiration: {
        type: Date,
        required: false
    },
    wins: Number,
    loses: Number
})

module.exports = mongoose.model('Player', userSchema)