const express=require('express')
const DoctorAppointment = require('../Services/DoctorServices/DoctorManageAppoinments')
const Secuirty = require('../Security/UserSecurity')
const router=express.Router();
router.route('/createdoctorappointment').post(Secuirty.protect,DoctorAppointment.CreateDoctorAppointment)
router.route('/getdoctorappointmentbyid/:id').get(DoctorAppointment.findRecordById)
router.route('/').get(DoctorAppointment.findAllRecords)
router.route('/updatedelete/:id').delete(DoctorAppointment.DeleteRecord).patch(DoctorAppointment.UpdateRecord)
module.exports =router
 