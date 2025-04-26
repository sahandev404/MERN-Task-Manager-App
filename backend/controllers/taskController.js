const Task = require("../models/taskModel");
const User = require("../models/userModel");

// @desc Create a task
// @route POST /api/tasks
// @access Private
const createTask = async (req, res) => {
    try {
        const task = await Task.create({
            name : req.body.name,
            user: req.user.id
        });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Get all tasks
// @route GET /api/tasks
// @access Private
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// @desc Get a task
// @route GET /api/tasks/:id
// @access Private
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

// @desc Delete a task
// @route DELETE /api/tasks/:id
// @access Private
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
};

// @desc Update a task
// @route PUT /api/tasks/:id
// @access Private
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(
            { _id: id },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if (!task) {
            return res.status(404).json({ message: `Task not found for this id: ${id}` });
        } else {
            res.status(200).json(task);
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask,
};