import asyncHandler from 'express-async-handler';
import User from '../schemas/userModel';
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

    const user = new User({
        username: username,
        email: email,
        password: password
    });

    const result = user.save(user);

    if (result) {
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

const authUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
            token: generateToken(user._id),
        })
    }
});

module.exports = { registerUser, authUser };