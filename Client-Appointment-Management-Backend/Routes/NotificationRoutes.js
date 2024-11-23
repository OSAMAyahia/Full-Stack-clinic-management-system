const express=require('express')
const notificationservices=require('../Services/NotificationSevices')
 const router=express.Router();

router.route('/').get(notificationservices.GetAllNotifications)
router.route('/:id').get(notificationservices.Getnotification)

module.exports =router;