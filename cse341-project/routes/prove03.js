const express = require('express');
const controller = require('../controller/prove03Controller')
const router = express.Router()

//router.get('/', controller.getAddProduct)
router.get('/products/:productId', controller.getProduct)
router.get('/', controller.getProducts)
router.post('/', controller.postAddProduct)

module.exports = router