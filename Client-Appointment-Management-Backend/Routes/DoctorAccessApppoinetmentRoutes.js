const express=require('express')
const DoctorAccessPatientAppointments = require('../Services/DoctorServices/DoctorAccessPatientAppointments')
const router=express.Router();
 router.route('/getdocaccesspatientappo/:id').get(DoctorAccessPatientAppointments.findRecordById)
module.exports =router


