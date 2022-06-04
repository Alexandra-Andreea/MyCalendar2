import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

// before the user is logged in, the password will be encrypted
userSchema.pre('save', async function (next) {
    if (!this.isModified) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
module.exports = User;
