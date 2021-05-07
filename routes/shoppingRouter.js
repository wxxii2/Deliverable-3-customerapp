const express = require('express')

// add our router
const shoppingRouter = express.Router()

// require the author controller
const shoppingController = require('../controllers/shoppingController.js')

// handle the GET request to get all authors
shoppingRouter.get('/', shoppingController.getShopping)

shoppingRouter.get('/:id', shoppingController.addShopping)

// export the router
module.exports = shoppingRouter