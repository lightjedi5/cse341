const bcrypt = require('bcryptjs')
const User = require('../Model/ta05');

exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    User.findOne({ email: email })
      .then(userDoc => {
        if (!userDoc) {
          req.flash('error', 'Invlad email or password')
          return res.redirect('/signup');
        }
        bcrypt
          .compare(password, user.password)
          .then(doMatch => {
            if(doMatch) {
              req.session.isLoggedIn = true
              req.session.user = user
              return req.session.save(err => {
                console.log(err)
                res.redirect('/')
              })
            }
            req.flash('error', 'Invlad email or password')
            res.redirect('login')
          })
          .then(result => {
            res.redirect('/login');
            return transporter.sendMail({
              to: email,
              from: 'shope@node-complete.com',
              subject: 'Thanks for Signing up',
              html: '<h1>You successfully signed up!</h1>'
            })
            
          })
      })
  
      .catch(err => {
        console.log(err);
      });
  };