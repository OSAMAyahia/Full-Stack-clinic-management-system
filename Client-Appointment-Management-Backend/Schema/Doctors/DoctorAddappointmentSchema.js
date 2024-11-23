const mongoose = require("mongoose");

const appointmentSchemaDocor = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String, // يمكن استخدام تنسيق 24 ساعة، مثل "14:30"
        required: true,
    },
    status: {
        type: String,
        enum: ["Available", "Unavailable"],
        default: "Available",
    },
    notes: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Appointmentdoctor", appointmentSchemaDocor);
