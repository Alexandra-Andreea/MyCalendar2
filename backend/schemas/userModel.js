import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import moment from 'moment'

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true, default: 'first name' },
    lastName: { type: String, required: true, default: 'last name' },
    birthday: { type: Date, required: true, default: (Date.now) },
    darkTheme: { type: Boolean },
    feedback: { type: Number, required: true, default: 0 },
    events: [{
        nameEvent: { type: String, required: true, unique: true },
        descriptionEvent: { type: String },
        startDateEvent: { type: Date, default: Date.now },
        endDateEvent: { type: Date, default: Date.now },
        startHourEvent: { type: Date, default: Date.now },
        endHourEvent: { type: Date, default: Date.now },
    }],
    milestones: [{
        nameMilestone: { type: String, required: true },
        descriptionMilestone: { type: String },
        dateMilestone: { type: Date, default: Date.now },
        completeMilestone: { type: Boolean, default: false }
    }],
    tasks: [{
        nameTask: { type: String, required: true, unique: true },
        descriptionTask: { type: String },
        startDateTask: { type: Date, default: Date.now },
        endDateTask: { type: Date, default: Date.now },
        endHourTask: { type: Date },
        completeTask: { type: Boolean, default: false },
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
