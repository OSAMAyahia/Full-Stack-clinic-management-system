const mongoose=require('mongoose');
 
const appointmentSchema = new mongoose.Schema({
    PatientID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    Specialty: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialty', required: true },
    appointmentDate: { type: Date, required: true },
    AppointmentType: { type: String, enum: ["Detection", "Consultation"], required: true },
    status: { type: String, enum: ['Scheduled', 'Confirmed', 'Cancelled'], default: 'Scheduled' },
    time: {type: String, required: true},
    createdAt: { type: Date, default: Date.now }
});


module.exports=mongoose.model('appointment',appointmentSchema)