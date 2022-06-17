import asyncHandler from 'express-async-handler';
import User from '../schemas/userModel';

const fetchTasks = asyncHandler(async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });

        res.json(user);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

const addTask = asyncHandler(async (req, res) => {
    try {
        const userId = req.body._id;
        const {nameTask, descriptionTask, startDateTask, endDateTask, endHourTask} = req.body;

        if (!nameTask) {
            res.status(400);
            throw new Error("Task name must be completed");
        }

        const newTask = {
            nameTask: nameTask,
            descriptionTask: descriptionTask,
            startDateTask: startDateTask,
            endDateTask: endDateTask,
            endHourTask: Date(endHourTask)
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

const checkTask = asyncHandler(async (req, res) => {
    try {
        const userId = req.body._id;
        const { nameTask, completeTask } = req.body;

        console.log('controller', completeTask);

        if (!nameTask) {
            res.status(400);
            throw new Error("Task name must be completed");
        }

        const user = await User.updateOne(
            {
                _id: userId,
                tasks: { $elemMatch : {nameTask: nameTask } }
            },
            {
                $set: { "tasks.$.completeTask": completeTask }
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

// db.collection('users').updateOne({user: "some userID"}, {$pull: { hobbies: {title: "Gaming"} }})

const deleteTask = asyncHandler(async (req, res) => {
    try {
        const userId = req.body._id;
        const nameTask = req.body.nameTask;

        if (!nameTask) {
            res.status(400);
            throw new Error("Invalid task");
        }

        const user = await User.updateOne(
            {_id: userId},
            {
                $pull: {tasks: {nameTask: nameTask}}
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

module.exports = { fetchTasks, addTask, deleteTask, checkTask };
