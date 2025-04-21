const User = require('../models/userModel');

const registerUser = async (req, res) => {
    res.json({ message: 'User register' })
}

module.exports = {
    registerUser
}