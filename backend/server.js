const express = require("express");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv").config();

connectDB();

const app = express();

app.get("/",(req, res) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});