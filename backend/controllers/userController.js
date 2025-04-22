const User = require('../models/userModel');


// @desc Register a new user
// @route POST /api/users/register
// @access Public
const registerUser = async (req, res) => {
    res.json({ message: 'User register' })
}

module.exports = {
    registerUser
}