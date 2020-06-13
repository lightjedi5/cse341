const express = require('express')

//imports from within project
const controller = require('../controller/auth')
const Player = require('../models/users')
const router = require('../../Udemy/CourseWork/routes/admin')


router.get('/login', getLogin())
router.get('/signup', getSignup())
router.post('/login',postLogin())
router.post('/signup',postSignup())
router.post('/logout', postLogout());
router.get('/reset', getReset());
router.post('/reset', postReset());
router.get('/reset/:token', getNewPassword());
router.post('/new-password', postNewPassword());

module.exports = router;
