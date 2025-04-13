const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Task = require("./model/taskModel");

const app = express();

//Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// Custom middleware example
// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// }

//Routes
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.post("/api/tasks", async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).jason({ message: error.message });
    }
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