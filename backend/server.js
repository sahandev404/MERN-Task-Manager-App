const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use(express.json()); // Parse JSON bodies
// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// }

//Routes
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.post("/api/tasks", async (req, res) => {
    console.log(req.body);
    res.send("Task Created");
});

// Connect to MongoDB
const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });