const express = require('express')
const Player = require('../models/users')
const router = express.Router()
const bcrypt = require('bcryptjs')

getLogin = (req, res, next) => {
    res.render('pages/login', {
        pageTitle: 'Login',
        path: '/login',
        oldInput: {
            username: '',
            password: ''
        },
        validationErrors: []
    })
}

getSignup = (req, res, next) => {
    res.render('pages/signup', {
        path: '/signup',
        pageTitle: 'Signup',
        //errorMessage: message,
        oldInput: {
          username: '',
          password: '',
          confirmPassword: ''
        },
        validationErrors: []
      });
}

postLogin = (req, res, next) => {
  const uName = req.body.username;
  const password = req.body.password;

  Player.findOne({ username: uName })
    .then(user => {
      console.log(user)
      if (!user) {
        return res.status(422).render('pages/login', {
          path: '/login',
          pageTitle: 'Login',
          errorMessage: 'Invalid email or password.',
          oldInput: {
            username: uName,
            password: password
          },
          validationErrors: []
        })
      } 
    bcrypt.compare(password, user.password)
    .then(doMatch => {
      if(doMatch) {
        req.session.isLoggedIn = true
        req.session.user = user
        return req.session.save(err => {
          console.log(err)
          res.redirect('/')
        })
      }
      return res.status(422).render('pages/login', {
        path: '/login',
        pageTitle: 'Login',
        errorMessage: 'Invalid email or password',
        oldInput: {
          username: uName,
          password: password
        },
        validationErrors: []
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/login')
    })
  })
    .catch(err => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

postSignup = (req, res, next) => {
  console.log(req.body)
  const uName = req.body.username
  const password = req.body.password


  bcrypt
    .hash(password, 5)
    .then(hashedPassword => {
      const user = new Player({
        username: uName,
        password: hashedPassword,
        confirmPassword: req.body.confirmPassword
      })
      return user.save()
    })
    .then(result => {
      res.redirect('/login')
    })
    .catch(err => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err)
    res.redirect('/')
  })
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