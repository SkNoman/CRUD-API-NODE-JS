const express = require('express')
const app = express()
const PORT = 7777

app.get('/', (req,res) => {
    res.send('Hello World! My self abdullah the new node js developer')
})

app.listen(PORT, () =>{
    console.log(`App is running on http://localhost:${PORT}`)
})