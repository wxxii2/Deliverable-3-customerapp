const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.use(express.json())  // replaces body-parser
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public')) // define where static assets live

app.engine('hbs', exphbs({
  defaultlayout: 'main',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')

// connect to models to routes
require('./models')
const authorRouter = require('./routes/authorRouter')
const goodsRouter = require('./routes/goodsRouter')
const shoppingRouter = require('./routes/shoppingRouter')

// GET home page
app.get('/', (req, res) => {
  console.log('connected')
  res.render('index')
})

// Handle author-management requests
// the author routes are added onto the end of '/author-management'
app.use('/author-management', authorRouter)
app.use('/goods', goodsRouter)
app.use('/shopping', shoppingRouter)

app.listen(process.env.PORT || 3000, () => {
  console.log("The library app is running!")
})
