const express=require('express')
const recordPatient = require('../Services/PaientsServices/PatientRecordServices')
const secuirty = require('../Security/UserSecurity')
const router=express.Router();
router.route('/createrecord').post(secuirty.protect,recordPatient.CreatePatientRecord)
router.route('/getrecordbyid').get(secuirty.protect,recordPatient.findRecordById)
router.route('/').get(recordPatient.findAllRecords)
router.route('/updatedelete/:id').delete(recordPatient.DeleteRecord).patch(recordPatient.UpdateRecord)
module.exports =router
