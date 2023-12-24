const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const router = require('./apiRouter')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())







app.use('/admin/api/v1', router)
app.listen(3000, () =>{
    console.log(`Link: http://localhost:${3000}`)
})