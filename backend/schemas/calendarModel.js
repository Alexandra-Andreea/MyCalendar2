import mongoose from 'mongoose';

const calendarSchema = mongoose.Schema({
    idCalendar: { type: Number, required: true },
    nameCalendar: { type: String, required: true },
    events: [{
        nameEvent: { type: String, required: true },
        descriptionEvent: { type: String },
        allDayEvent: { type: Boolean, default: false },
        startDateEvent: { type: Date, default: Date.now },
        endDateEvent: { type: Date, default: Date.now },
        hourEvent: { type: Date, default: Date.now },
        locationEvent: { type: String },
        repeatEvent: {
            infiniteEvent: { type: Boolean, default: false },
            typeEvent: { type: String, default: "none" },
            noRepeatsEvent: { type: Number, default: 0 },
            finishSerieEvent: { type: Date },

        },
        colorEvent: { type: String },
        notificationsEvent: { type: Boolean, default: false },
    }],
});

const Calendar = mongoose.model("Calendar", calendarSchema);
module.exports = Calendar;
