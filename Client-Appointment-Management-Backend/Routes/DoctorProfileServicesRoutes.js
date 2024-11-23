const express=require('express')
const DoctorProfileServices = require('../Services/DoctorServices/DoctorProfileServices')
const router=express.Router();
router.route('/createDoctorProfile').post(DoctorProfileServices.CreateProfileDoc)
router.route('/getDoctorProfilebyid/:id').get(DoctorProfileServices.GetProfileDoctorById)
module.exports =router
