const express=require('express')
const UserSecurity=require('../Security/UserSecurity')
 const router=express.Router();

 router.route('/signup').post(UserSecurity.signup)
 router.route('/login').post(UserSecurity.login)
 router.route('/forgetpafssword').post(UserSecurity.forgetpassword)
 router.route('/resetpafssword').post(UserSecurity.resetpassword)
 router.route('/finddors/:id').get(UserSecurity.FindDoctorBySecialtyId)
 
module.exports =router;        