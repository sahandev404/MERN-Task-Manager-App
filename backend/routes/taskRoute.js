const express = require("express");
const Task = require("../models/taskModel");
const router = express.Router();
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");

// Create a task

router.route("/tasks/")
    .post(createTask)
    .get(getTasks);
router.route("/tasks/:id")
    .get(getTask)
    .delete(deleteTask)
    .put(updateTask);

// router.post("/", createTask);
// router.get("/", getTasks);
// router.get("/:id", getTask);
// router.delete("/:id", deleteTask);
// router.put("/:id", updateTask);

module.exports = router;