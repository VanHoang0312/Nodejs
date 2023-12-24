const express = require('express')
const app = express()
const router = require('./apiRouter')


 var checkAdmin = (req, res, next)=>{
    req.user.role
    next()
 }


 var checkDangnhap = (req, res, next)=>{
     if(Dangnhap){
       req.user = user
        next()
    }else{
         res.json('Ban chua dang nhap')
    }
 }



app.get('/', checkDangnhap, (req, res, next) =>{
    
    res.json('Du lieu')
  
 })


app.use('/admin/api/v1/' ,router )

app.listen(3000, () =>{
    console.log(`Link: http://localhost:${3000}`)
})