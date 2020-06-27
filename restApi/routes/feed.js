const express = require('express')
const router = express.Router()
const controller = require('../controllers/feed')

router.get('/posts', controller.getPosts)

router.get('/post', controller.createPost)

module.exports = router