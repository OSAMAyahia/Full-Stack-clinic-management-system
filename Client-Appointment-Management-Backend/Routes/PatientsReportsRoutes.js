const express=require('express')
const PatientsReports = require('../Services/DoctorServices/PatientsReports')
const secuirty = require('../Security/UserSecurity')
const router=express.Router()
router.route('/createreport').post(secuirty.protect,PatientsReports.CreatemedicalReport)
router.route('/getreportbyid').get(secuirty.protect,PatientsReports.findRecordById)
router.route('/').get(PatientsReports.findAllRecords)
router.route('/updatedelete/:id').delete(PatientsReports.DeleteRecord).patch(PatientsReports.UpdateRecord)
module.exports =router
  