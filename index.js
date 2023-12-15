
const express = require('express')
const port = 3000
const app = express()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authenticationroutes = require('./Routes/AuthenticationRoute')

require('./database')
require('./modals/User')


app.use(bodyParser.json())
app.use(authenticationroutes)



app.get('/', (req, res)=>{
    res.send("Hello from home page")
})


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})

