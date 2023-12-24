const express = require('express')
const router1 = express.Router()


router1.get('/', (req, res) =>{
    res.json("router 1 home")
})

router1.get('/product', (req, res) =>{
    res.json("router 1 product")
})

router1.get('/cart', (req, res) =>{
    res.json("router 1 cart")
})

router1.get('/:id', (req, res) =>{
    res.json("router 1 home " + req.params.id)
})


module.exports = router1

