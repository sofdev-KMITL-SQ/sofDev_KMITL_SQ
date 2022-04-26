//* connect to databse is mongoDB by mongoose

const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config( { path : path.resolve(__dirname, '../../.env')})
console.log(__dirname)
console.log(process.env.MONGO_URI)

const connectDB = async () =>{
    try {
        const connectDB = await mongoose.connect(process.env.MONGO_URI)  //? เชื่อมกับ mongobd
        console.log(`MongoDB is connect successfully : ${connectDB.connection.host}`);  //* .cyan.underline เป็นการใส่ color
    } catch (error) {
        console.log(error);
        process.exit(1)   //!  ต้องการออกจาก process และส่งเลข 1 ไป
    }
}

module.exports = connectDB