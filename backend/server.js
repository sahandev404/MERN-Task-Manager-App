const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

app.get("/",(req, res) => {
    res.send("Hello World");
});

app.post("/api/tasks",(req,res)=>{
    console.log(req.body);
    res.send("Task Created");
});


app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
    })
    .catch((err)=>{
        console.error(err);
    });