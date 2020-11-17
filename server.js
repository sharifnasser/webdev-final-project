// We are going to use MVC to hold our views folder

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
// Body-parser helps us get data from our server
const bodyParser = require('body-parser')

// route folder to hold the routes to differnt paths
// indexRouter variable is going to be set to the router variable in index.js
const indexRouter = require('./routes/index')
/*
const listRouter = require('./routes/lista')
const profileRouter = require('./routes/perfil')
const departmentRouter = require('./routes/departamento')
const projectRouter = require('./routes/proyecto')*/



app.set('view engine', 'ejs')
// Every view file will be placed inside this view folder
app.set('views', __dirname + '/views')
// Every single layout file will placed inside this layout
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
// Where our public files are going to be: css, style sheets, javascript files, images
app.use(express.static('public'))

// We are sending values thorugh a url encoded
// This configuration needs to take place before the routes configuration
app.use(bodyParser.urlencoded({limit: '10mb', extended: false }))


// Tell the app that we want to use 
app.use('/', indexRouter)
// Every route inside our authorRouter its going to be preempted to /authors path such as
// /authors
// /authors/new
//app.use('/authors', authorRouter)
// Every route inside our bookRouter its going to be preempted to /books path such as
// /books
// /books/new
//app.use('/books', bookRouter)



app.listen(process.env.PORT || 3000)