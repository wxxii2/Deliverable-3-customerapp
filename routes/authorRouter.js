const express = require('express')

// add our router
const authorRouter = express.Router()

// require the author controller
const authorController = require('../controllers/authorController.js')

// handle the GET request to get all authors
authorRouter.get('/', authorController.getAllAuthors)

// handle POST requests to update an author
authorRouter.post('/:authorId', authorController.updateAuthor)

// handle the GET request to get one author
authorRouter.get('/:authorId', authorController.getOneAuthor)

// handle POST requests to add one author
authorRouter.post('/', authorController.addAuthor)

// export the router
module.exports = authorRouter