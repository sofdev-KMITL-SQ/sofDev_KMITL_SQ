const express = require('express')
const router = require('./routes/myRouter')
const mongoose = require('mongoose')
const app = express()


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)
// app.use('/api/shop',require('./routes/myRouter'))
app.listen(3300,()=>{
    console.log("start server at port 3300")
})


// http://localhost:3300/showAllProduct