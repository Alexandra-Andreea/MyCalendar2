import asyncHandler from 'express-async-handler';
import User from '../schemas/userModel';

const fetchNotes = asyncHandler(async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });

        res.json(user);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

const addNote = asyncHandler(async (req, res) => {
    try {
        const userId = req.body._id;
        const descriptionStickyNote = req.body.descriptionStickyNote;

        if (!descriptionStickyNote) {
            res.status(400);
            throw new Error("Invalid note");
        }

        const newNote = {
            descriptionStickyNote: descriptionStickyNote
        }

        const user = await User.findByIdAndUpdate(
            userId,
            {
                $push: { notes: newNote }
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

const deleteNote = asyncHandler(async (req, res) => {
    try {
        const userId = req.body._id;
        const descriptionStickyNote = req.body.descriptionStickyNote;

        if (!descriptionStickyNote) {
            res.status(400);
            throw new Error("Invalid note");
        }

        const user = await User.updateOne(
            {_id: userId},
            {
                $pull: {notes: {descriptionStickyNote: descriptionStickyNote}}
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

const editNote = asyncHandler(async (req, res) => {
    try {
        const userId = req.body._id;
        const descriptionStickyNote = req.body.descriptionStickyNote;

        if (!descriptionStickyNote) {
            res.status(400);
            throw new Error("Invalid note");
        }

        const user = await User.updateOne(
            {
                _id: userId,
                notes: { $elemMatch : {notes: descriptionStickyNote } }
            },
            {
                $set: { "notes.$.descriptionStickyNote": descriptionStickyNote }
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

module.exports = {fetchNotes, addNote, deleteNote, editNote}