const mongoose = require('mongoose');

const medicalReportSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,  // يدويا
        ref: "User",
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    diagnosis: {
        type: String,
        required: true
    },
    tests: {
        type: [String], // مثل أسماء الفحوصات المطلوبة
        default: []
    },
    treatmentPlan: {
        type: String, // التوصيات العلاجية
        default: ""
    },
    notes: {
        type: String,
        default: ""
    }
});

const MedicalReport = mongoose.model("MedicalReport", medicalReportSchema);

module.exports = MedicalReport;
