const express=require('express')
const appintmentservices=require('../Services/AppointmentServices')
const Security=require('../Security/UserSecurity')
const validationResults=require('../Utilities/validationResults')
const {check}=require('express-validator')
 const router=express.Router();

router.route('/createappiontment').post(Security.protect,appintmentservices.CreateAppointment)
router.route('/getallappiontments').get(Security.protect,Security.restectedto("Admin"),appintmentservices.GetAllAppointments)
router.route('/getappiontment').get( Security.protect,appintmentservices.GetAppointment).patch(Security.protect,appintmentservices.UpdateAppointment)

module.exports =router;