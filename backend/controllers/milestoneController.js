import asyncHandler from 'express-async-handler';
import User from '../schemas/userModel';

const fetchMilestones = asyncHandler(async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });

        res.json(user);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

const addMilestone = asyncHandler(async (req, res) => {
    try {
        const userId = req.body._id;
        const { nameMilestone, descriptionMilestone } = req.body;

        if (!nameMilestone) {
            res.status(400);
            throw new Error("Invalid milestone");
        }

        const newMilestone = {
            nameMilestone: nameMilestone,
            descriptionMilestone: descriptionMilestone
        }

        const user = await User.findByIdAndUpdate(
            userId,
            {
                $push: { milestones: newMilestone }
            },
            {
                new: true,
            }
        );

        if (!user) {
            res.status(404);
            throw new Error("User not found");
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

const deleteMilestone = asyncHandler(async (req, res) => {
    try {
        const userId = req.body._id;
        const nameMilestone = req.body.nameMilestone;

        if (!nameMilestone) {
            res.status(400);
            throw new Error("Invalid event");
        }

        const user = await User.updateOne(
            {_id: userId},
            {
                $pull: {milestones: {nameMilestone: nameMilestone}}
            }
        )

        console.log(user);

        if (!user) {
            res.status(404);
            throw new Error("User not found");
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

const checkMilestone = asyncHandler(async (req, res) => {
    try {
        const userId = req.body._id;
        const { nameMilestone, completeMilestone } = req.body;

        console.log(completeMilestone);

        if (!nameMilestone) {
            res.status(400);
            throw new Error("Task name must be completed");
        }

        const user = await User.updateOne(
            {
                _id: userId,
                milestones: { $elemMatch : {nameMilestone: nameMilestone } }
            },
            {
                $set: { "milestones.$.completeMilestone": completeMilestone }
            }
        );

        console.log(user);

        if (!user) {
            res.status(404);
            throw new Error("User not found");
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

module.exports = { fetchMilestones, addMilestone, deleteMilestone, checkMilestone };