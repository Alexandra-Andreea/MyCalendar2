import asyncHandler from 'express-async-handler';
import User from '../schemas/userModel';

const fetchEvents = asyncHandler(async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });

        res.json(user);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

const addEvent = asyncHandler(async (req, res) => {
    try {
        const userId = req.body._id;
        const {nameEvent, descriptionEvent, startDateEvent, endDateEvent, startHourEvent, endHourEvent} = req.body;

        if (!nameEvent) {
            res.status(400);
            throw new Error("Invalid event");
        }

        const newEvent = {
            nameEvent: nameEvent,
            descriptionEvent: descriptionEvent,
            startDateEvent: startDateEvent,
            endDateEvent: endDateEvent,
            startHourEvent: startHourEvent,
            endHourEvent: endHourEvent
        }

        const user = await User.findByIdAndUpdate(
            userId,
            {
                $push: { events: newEvent }
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

const deleteEvent = asyncHandler(async (req, res) => {
    try {
        const userId = req.body._id;
        const nameEvent = req.body.nameEvent;

        if (!nameEvent) {
            res.status(400);
            throw new Error("Invalid event");
        }

        const user = await User.updateOne(
            {_id: userId},
            {
                $pull: {events: {nameEvent: nameEvent}}
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

const editEvent = asyncHandler(async (req, res) => {
    try {
        const userId = req.body._id;
        const {nameEvent, descriptionEvent, startDateEvent, endDateEvent, startHourEvent, endHourEvent} = req.body;

        if (!nameEvent) {
            res.status(400);
            throw new Error("Invalid event");
        }

        const user = await User.updateOne(
            {
                _id: userId,
                events: { $elemMatch : {events: nameEvent } }
            },
            {
                $set: { 
                    "events.$.nameEvent": nameEvent,
                    "events.$.descriptionEvent": descriptionEvent,
                    "events.$.startDateEvent": startDateEvent,
                    "events.$.endDateEvent": endDateEvent,
                    "events.$.startHourEvent": startHourEvent,
                    "events.$.endHourEvent": endHourEvent,
                }
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

module.exports = {fetchEvents, addEvent, deleteEvent, editEvent};