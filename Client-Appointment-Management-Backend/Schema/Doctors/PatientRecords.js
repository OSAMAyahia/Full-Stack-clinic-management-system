const mongoose = require("mongoose");

const patientRecordSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    chronicDiseases: {
        type: [String], // مثل "السكري"، "الضغط"
        default: []
    },
    medications: {
        type: [String], // مثل أسماء الأدوية التي يأخذها المريض
        default: []
    },
    allergies: {
        type: [String], // الحساسية التي يعاني منها المريض، إن وجدت
        default: []
    },
    medicalHistory: {
        type: String, // معلومات إضافية حول التاريخ الطبي
        default: ""
    }
});

const PatientRecord = mongoose.model("PatientRecord", patientRecordSchema);

module.exports = PatientRecord;
