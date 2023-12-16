
const express = require('express')
const port = 3000
const app = express()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authenticationroutes = require('./Routes/AuthenticationRoute')

const UserModel = require('./modals/UserData')
require('./database')
require('./modals/User')

app.use(bodyParser.json())
app.use(authenticationroutes)



app.get('/', (req, res)=>{
    res.send("Hello from home page")
})

app.get("/getdata", async(req, res)=>{
    try{
        
        const data = await UserModel.find()
        res.status(200).json(data)
        // console.log(data)
    }
    catch(error){
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
})


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})

