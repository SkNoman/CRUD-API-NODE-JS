const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const helmet = require('helmet')
const route = require('./routes/route')

const PORT = process.env.PORT || 3000

app.use(morgan('combined'))
//app.use(cors())
app.use(express.json())
//app.use(express.urlencoded({extended: false}))

//it will increate the HTTP header security to useing helmet
//app.use(helmet())

//set default prefix to routing
//app.use('/api',route)

app.get('/',(req,res) =>{
    console.log('Someone is hiting your server,',new Date() + "User Ip"+req.ip)
    res.send(`
        <html>
            <head>
            <title>Sk Noman</title>
            </head>
            <body>
                <center><p>Hello, from the other side!</p></center>
                <h1>This is a demo website</h1>
            </body>
        
        </html>
    `)
})

app.listen(PORT, () =>{
    console.log(`App is running on http://localhost:${PORT}`)
})