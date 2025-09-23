const mongoose = require("mongoose")

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        //await mongoose.connect("mongodb+srv://affishh01:8z3pQARNEwmrVd73@cluster0.sufvp0e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("DB connected successfully")
    }
    catch(error){
        console.error("MongoDB connection failed", error)
    }

}
module.exports = connectDB;