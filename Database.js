require('dotenv').config()
const mongoose = require('mongoose')


const uri = process.env.DB;

const connectDB = async () =>{
    try {
        await mongoose.connect(uri);
         console.log('MongoDB connected')
            }  
        catch (error) {
        console.log(error.message)
    }
}
module.exports = connectDB;




