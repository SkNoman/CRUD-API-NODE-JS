const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const helmet = require('helmet')
const route = require('./routes/route')
const PORT = process.env.PORT || 5000
app.use(cors());
app.use(morgan('combined'))
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline';");
    next();
  });

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//IT WILL INCREASE  HTTP HEADER SECURITY
app.use(helmet())

//STATIC FILES
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
//SET VIEWS
app.set('views','./views')
app.set('view engine', 'ejs')


//SET DEFAULT PREFIX TO ROUTES
app.use('/api',route)

app.get('/',(req,res) =>{
    console.log('Someone is hiting your server,',new Date() + "User Ip"+req.ip)
    res.send(`
        <html>
            <head>
            <title>Xidni Exclusive</title>
            </head>
            <body>
              <center><h1>Hello From The Other Side</h1></center>
            </body>
        
        </html>
    `)
})
app.get('/home', (req,res) =>{
    res.render('index',{text:'This is Home'})
})

app.listen(PORT, () =>{
    console.log(`App is running on http://localhost:${PORT}`)
})