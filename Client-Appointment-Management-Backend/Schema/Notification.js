const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    appointmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
        required: true
    },
    notificationDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Sent', 'Pending'],
        default: 'Pending'
    }
});

const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;
