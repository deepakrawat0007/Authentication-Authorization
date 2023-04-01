const express = require('express')
const bodyparser = require('body-parser')
const RegistrationRoute = require("./Routes/RegistrationRoute")
const cors = require('cors')
const LoginRoute = require("./Routes/LoginRoute");
const Authenticate = require("./Authentication/Authentication")

const app = express()


app.use(bodyparser.json())
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).json({
        "Message":"Server is OK"
    })
})
app.use("/" , RegistrationRoute)
app.use("/" , LoginRoute)

module.exports = app