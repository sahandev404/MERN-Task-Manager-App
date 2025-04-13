const Task = require("../models/taskModel");

// Create a task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Get a single task
const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) {
            res.status(404).json({ message: `Task not found for this id: ${id}` });
        } else {
            res.status(200).json(task);
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            res.status(404).json({ message: `Task not found for this id: ${id}` });
        } else {
            res.status(200).json(task);
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
};