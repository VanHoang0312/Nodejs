const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.json('Home router')
})

router.get('/product', (req, res) =>{
    res.json('Router product')
})

router.get('/cart', (req, res) =>{
    res.json('Router cart')
})



module.exports = router
