const express = require('express')

// add our router
const goodsRouter = express.Router()

// require the author controller
const goodsController = require('../controllers/goodsController.js')

// handle the GET request to get all authors
goodsRouter.get('/', goodsController.getGoods)

// export the router
module.exports = goodsRouter