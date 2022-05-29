import asyncHandler from 'express-async-handler';
import User from '../schemas/userSchema';
import generateToken from '../config/generateToken';

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error("You have to complete all fields");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        username,
        email,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
            token: generateToken(user._id),
        })
    } else {
        res.status(400);
        throw new Error("User not found");
    }
});

module.exports = { registerUser };