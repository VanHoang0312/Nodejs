const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) =>{
    res.send("hhhh")   
})

app.listen(port, () =>{
    console.log(`Link cua anh day: http://localhost:${port}`)
})