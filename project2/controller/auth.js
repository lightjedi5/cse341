const Player = require('../models/users')
const router = require('../../Udemy/CourseWork/routes/admin')

getLogin = (req, res, next) => {
    res.render('pages/login', {
        pageTitle: 'Login',
        path: '/login',
        oldInput: {
            username: '',
            password: ''
        }
    })
}

getSignup = (req, res, next) => {

}

postLogin = (req, res, next) => {

}

postSignup = (req, res, next) => {

}

postLogout = (req, res, next) => {

}

getReset = (req, res, next) => {

}

postReset = (req, res, next) => {

}

getNewPassword = (req, res, next) => {

}

postNewPassword = (req, res, next) => {
    
}

module.exports = router