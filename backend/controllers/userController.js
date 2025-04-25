const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: 'User register' })
})

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'User logged in' })
})

// @desc Get user data
// @route POST /api/users
// @access Public
const getUserData = asyncHandler(async (req, res) => {
    res.json({ message: 'User data retrieved' })
})

module.exports = {
    registerUser,
    loginUser,
    getUserData,
}