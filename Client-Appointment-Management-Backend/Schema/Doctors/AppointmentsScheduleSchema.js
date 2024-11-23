const mongoose = require('mongoose')

const doctoraccessappintment=new mongoose.Schema({
    AppointmentID: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'appointment',
        required: true,
    },
    PatientID: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    AppointmentDateAndTime :  {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'appointment',
        required: true,
    },
    Status :  {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'appointment',
        required: true,
    },
    AppointmentType :  {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'appointment',
        required: true,
    } 

})

module.exports=mongoose.model('doctoraccessappintment',doctoraccessappintment)