import asyncHandler from 'express-async-handler';
import User from '../schemas/userModel';

const fetchRegisterData = asyncHandler(async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId })

        res.json(user);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

const updateProfileData = asyncHandler(async (req, res) => {
    try {
        const { firstName, lastName, birthday } = req.body;
        const userId = req.body._id;

        const updateUser = await User.findByIdAndUpdate(
            userId,
            {
                firstName: firstName,
                lastName: lastName,
                birthday: birthday
            },
            {
                new: true
            }
        );

        if (!updateUser) {
            res.status(404);
            throw new Error("User not found");
        } else {
            res.json(updateUser);
        }
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
})

module.exports = { fetchRegisterData, updateProfileData };