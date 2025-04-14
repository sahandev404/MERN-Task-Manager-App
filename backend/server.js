const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

const app = express();
//Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(cors());

app.use("/api/tasks", taskRoutes);

// Custom middleware example
// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// }

//Routes
app.get("/", (req, res) => {
    res.send("Hello World");
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