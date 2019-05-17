const express = require('express')
const path = require('path')
const morgan = require('morgan')
const uuid = require('uuid/v4')

const app = express()
require('./database')

//Settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: false
}))

app.use('/public', express.static(path.join(__dirname, 'public')))

//Global variables


//Routes
app.use(require('./routes/index'))

//Static files
app.use(express.static(path.join(__dirname, 'public')))

//Starting server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
})