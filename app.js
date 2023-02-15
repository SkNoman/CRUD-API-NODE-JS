const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const helmet = require('helmet')
const route = require('./routes/route')

const PORT = process.env.PORT || 3306

app.use(morgan('combined'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//it will increate the HTTP header security to useing helmet
app.use(helmet())

//set default prefix to routing
app.use('/api',route)

app.get('/',(req,res) =>{
    console.log('Someone is hiting your server,',new Date() + "User Ip"+req.ip)
    res.send('Welcome, This Is A Demo Site')
})

app.listen(PORT, () =>{
    console.log(`App is running on http://localhost:${PORT}`)
})