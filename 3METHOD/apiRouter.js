const express = require('express')
const router = express.Router()


router.get('/', (req, res) =>{
    
    res.json("Home router GET")
})


router.post('/', (req, res) =>{
    //console.log(req.headers);//req.body
    res.json("Router product POST" + req.body.Username  + " " + req.headers.phu) 
})

router.put('/', (req, res) =>{
    res.json("Router product PUT")
})


router.delete('/', (req, res) =>{
    res.json("Router product DELETE")
})



module.exports = router