// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = async (req, res) => {
    res.json({ message: 'User register' })
}

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = async (req, res) => {
    res.json({ message: 'User logged in' })
}

// @desc Get user data
// @route POST /api/users
// @access Public
const getUserData = async (req, res) => {
    res.json({ message: 'User data retrieved' })
}

module.exports = {
    registerUser,
    loginUser,
    getUserData,
}