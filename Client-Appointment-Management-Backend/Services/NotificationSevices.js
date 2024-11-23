const notification=require('../Schema/Notification')
const catchAsync=require("../Utilities/CatchAync")


exports.Getnotification = catchAsync(async(req,res,next)=>{
     const notifications=await notification.findById({_id:req.params.id})
        res.status(200).json({status: 'success', data: notifications})
        ;}
    
   )


exports.GetAllNotifications = catchAsync(async(req,res,next)=>{
     const notifications=await notification.find()
        res.status(200).json({status: 'success', data: notifications})
        ;}) 
    
   