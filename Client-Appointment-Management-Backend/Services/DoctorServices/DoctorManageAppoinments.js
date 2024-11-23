const DoctorAppointment =require('../../Schema/Doctors/DoctorAddappointmentSchema')


exports.CreateDoctorAppointment = async(req,res,next)=>{
    const Doctor=await DoctorAppointment.create({
        doctorId: req.currentUser._id ,
        date: req.body.date ,
        time: req.body.time ,
        status: req.body.status ,
        notes:  req.body.notes
    })
 
 
    res.status(200).json({
        message: 'success'
 
    }) 
} 

exports.findRecordById = async(req,res,next)=>{
    const Doctor =await DoctorAppointment.find({doctorId:req.params.id})
    res.status(200).json({
        message: 'success',
        data: Doctor

    })
}
 

exports.findAllRecords =async (req,res,next)=>{
    const patient = DoctorAppointment.find( )
    res.status(200).json({
        message: 'success',
        data: patient

    })
}


exports.UpdateRecord = async(req,res,next)=>{
    const Doctor =await DoctorAppointment.findByIdAndUpdate({doctorId:{_id:req.params.id}} , req.body, {new:true})
    res.status(200).json({
        message: 'success',
        data: Doctor

    })
}


exports.DeleteRecord =async (req,res,next)=>{
    const Doctor =await DoctorAppointment.findByIdAndDelete({doctorId:{_id:req.params.id}})
    res.status(200).json({
        message: 'success',
        data: Doctor

    })
}