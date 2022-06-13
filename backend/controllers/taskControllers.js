import asyncHandler from 'express-async-handler';
import User from '../schemas/userModel';

const fetchTasks = asyncHandler(async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });

        console.log(user);

        res.json(user);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

const addTask = asyncHandler(async (req, res) => {
    try {
        const userId = req.body._id;
        const nameTask = req.body.nameTask;
        const descriptionTask = req.body.descriptionTask;

        if (!nameTask) {
            res.status(400);
            throw new Error("Task name must be completed");
        }

        console.log(userId)
        console.log(nameTask)

        const newTask = {
            nameTask: nameTask,
            descriptionTask: descriptionTask
        }

        const user = await User.findByIdAndUpdate(
            userId,
            {
                $push: { tasks: newTask }
            },
            {
                new: true,
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

module.exports = { fetchTasks, addTask };
