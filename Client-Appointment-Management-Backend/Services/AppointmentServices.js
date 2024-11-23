const appointment=require('../Schema/Appointment')
const notification=require('../Schema/Notification')
const catchAsync=require("../Utilities/CatchAync")
// const DoctorAccessApppoinetment=require("../Schema/Doctors/AppointmentsScheduleSchema")
 

exports.CreateAppointment = catchAsync(async(req,res,next)=>{
   if (req.currentUser.role === "Doctor"){
      console.log("you have no permissions")
     return res.status(401).json({message:"you have no permissions"})
   }
 const appointments=await appointment.create({
    PatientID: req.currentUser._id ,
    doctorId: req.body.doctorId ,
    Specialty:  req.body.Specialty,
    appointmentDate:  req.body.appointmentDate,
    AppointmentType: req.body.AppointmentType,
    status:  req.body.status,
    time: req.body.time
     // const patient=await DoctorAccessApppoinetment.create({
    //             AppointmentID: appointments._id ,
    //             PatientID:  req.body.patientId,
    //             doctorId:  req.body.doctorId,
    //             AppointmentDateAndTime : req.body.appointmentDate ,
    //             Status : req.body.status ,
    //             AppointmentType : req.body.appointmentType 
    //       
      })
res.status(201).json({status: 'success', data: appointments})
    const notifications=await notification.create({
        appointmentId : appointments._id, 
        notificationDate : new Date(appointments.appointmentDate.getTime() - 60 * 60 * 1000) , 
        status : "Pending" })
})
 

exports.GetAppointment =catchAsync (async(req,res,next)=>{
 const appointments=await appointment.find({PatientID:req.currentUser._id})
    res.status(200).json({status: 'success', data: appointments})
    ;})

 

exports.GetAllAppointments =catchAsync (async(req,res,next)=>{
 const appointments=await appointment.find()
    res.status(200).json({length: appointments.length, status: 'success', data: appointments})
    ;})

 


exports.UpdateAppointment = catchAsync(async(req,res,next)=>{
 const appointments=await appointment.findByIdAndUpdate({PatientID:req.current._id} ,req.body , { new:true} )
    res.status(200).json({length: appointments.length, status: 'success', data: appointments})
    ;}
 )     