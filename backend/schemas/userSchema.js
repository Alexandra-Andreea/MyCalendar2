import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    birthday: { type: Date },
    darkTheme: { type: Boolean },
    feedback: { type: Number, required: true, default: 0 },
    calendars: [{
        idCalendar: { type: Number, required: true },
        editingRights: { type: Boolean, required: true },
    }],
    milestones: [{
        nameMilestone: { type: String, required: true },
        descriptionMilestone: { type: String },
        dateMilestone: { type: Date, default: Date.now },
        locationMilestone: { type: String },
        completeMilestone: { type: Boolean, default: false }
    }],
    tasks: [{
        nameTask: { type: String, required: true },
        descriptionTask: { type: String },
        startDateTask: { type: Date, default: Date.now },
        endDateTask: { type: Date, default: Date.now },
        hourTask: { type: Date },
        notificationsTask: { type: Boolean, default: false },
        completeTask: { type: Boolean, default: false },
        subtasks: [{
            nameSubtask: { type: String, required: true },
            descriptionSubtask: { type: String },
            startDateSubtask: { type: Date, default: Date.now },
            endDateSubtask: { type: Date, default: Date.now },
            hourSubtask: { type: Date },
            notificationsSubtask: { type: Boolean, default: false },
            completeSubtask: { type: Boolean, default: false },
        }]
    }],
    notes: [{
        nameStickyNote: { type: String, required: true },
        descriptionStickyNote: { type: String },
    }],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
