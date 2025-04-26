const express = require("express");
const Task = require("../models/taskModel");
const router = express.Router();
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");

// Create a task

router.route("/")
    .post(protect, createTask)
    .get(protect, getTasks);
router.route("/:id")
    .get(protect, getTask)
    .delete(protect, deleteTask)
    .put(protect, updateTask);

// router.post("/", createTask);
// router.get("/", getTasks);
// router.get("/:id", getTask);
// router.delete("/:id", deleteTask);
// router.put("/:id", updateTask);

module.exports = router;