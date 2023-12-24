const express = require('express')
const app = express()
var router1 = require('./apiRouter.js')


app.get('/', (req, res) =>{
    res.json('Home')
})




app.use('/api/', router1)


app.listen(3000, ()=>{
    console.log(`link: http://localhost:${3000}`)
})