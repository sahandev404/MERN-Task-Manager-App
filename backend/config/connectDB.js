const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
        const connectDB = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected");        
    }catch(error){
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;