const express = require('express')
const AccountModel = require('../models/accont')
const router = express.Router()

router.get('/', (req, res, next) =>{
    var username = req.body.username
    var password = req.body.password

    AccountModel.find({})
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.status(500).json('Dang bi loi')
    })

})

router.post('/', (req, res, next) =>{
    var username = req.body.username
    var password = req.body.password

    AccountModel.create({
        username: username,
        password: password
    })
    .then(data=>{
        res.json('Tao thanh cong')
    })
    .catch(err=>{
        res.status(500).json('Loi')
    })
})

router.put('/:id', (req, res, next) =>{
    var id = req.params.id
    var newPassword = req.body.newPassword
    
    AccountModel.findByIdAndUpdate(id, {
        password: newPassword
    })
    .then(data=>{
        res.json('Sua thanh cong')
    })
    .catch(err =>{
        res.status(500).json('Loi sever')
    })
})


router.get('/:id', (req, res, next) =>{
    var id = req.params.id

    AccountModel.findById({id})
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.status(500).json('Dang bi loi')
    })

})




router.delete('/:id', (req, res, next) =>{
    var id = req.params.id
    AccountModel.deleteOne({
        _id: id
    })
    .then(data=>{
        res.json('Xoa thanh cong')
    })
    .catch(err=>{
        res.status(500).json('Loi sever')
    })
})



module.exports = router