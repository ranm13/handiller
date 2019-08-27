const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const clientRoute = require('./server/routes/client')
const profRoute = require('./server/routes/prof')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use('/client',clientRoute)
app.use('/prof',profRoute)


const port = 5000
app.listen(port, function(){
    console.log('server is running')
})