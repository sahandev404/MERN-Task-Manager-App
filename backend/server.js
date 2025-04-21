const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoute");
const userRoutes = require("./routes/userRoute");
const cors = require("cors");
const path = require("path");

const app = express();
//Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(cors("https://mern-task-manager-frontend-pi.vercel.app/"));

app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

//Deployment Code
if (process.env.NODE_ENV === "production") {
    app.get("/", (req, res) => {
        res.send("API is running...");
    });
    // Serve static files from the React frontend app
    app.use(express.static(path.join(__dirname, "../frontend/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../", "frontend", "build", "index.html"));
    });

} else {
    // Development Code
    app.get("/", (req, res) => {
        res.send("API is running...");
    });

}

// Custom middleware example
// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// }

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