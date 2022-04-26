const express = require('express')
// const path = require('path')
// const dotenv = require('dotenv').config({path: './env'})
const port = process.env.PORT || 3300
const colors =require('colors')
const {errorHandler} = require('./middleware/errorMIddleware')
const connectDB = require('./config/db')
// dotenv.config( { path : 'config.env'} )

connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
//     next();
// })


app.use('/api/index',require('./routes/indexRoute'))
app.use('/api/user',require('./routes/userRoute'))
app.use('/api/cart',require('./routes/cartRoute'))


app.use(errorHandler)  //? จัดการ error

app.listen(port,()=> console.log(`Server Start Successfully on port ${port} !!`))