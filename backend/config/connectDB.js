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


//  USE THIS ON SERVER.JS

// const connectDB = require("./config/connectDB");

// const startServer = async ()=>{
//     try{
//         await connectDB();
//         app.listen(PORT, () => {
//             console.log(`server is running on port ${PORT}`);
//         });
//     }catch(error){
//         console.error(error);
//     }
// }
// startServer();