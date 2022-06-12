import asyncHandler from 'express-async-handler';
import User from '../schemas/userModel';

const fetchRegisterData = asyncHandler(async (req, res) => {
    try {
        const users = await User.find({ userId: req.params._id })
            .populate("username")
            .populate("email");

        res.json(users);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

module.exports = { fetchRegisterData };