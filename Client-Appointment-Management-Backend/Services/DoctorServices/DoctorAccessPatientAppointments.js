// const DoctorAccessApppoinetment =require('../../Schema/Doctors/AppointmentsScheduleSchema')
const DoctorAccessApppoinetment =require('../../Schema/Appointment')

 
 

// exports.findRecordById =async (req,res,next)=>{
//     const patient = await DoctorAccessApppoinetment.findById({doctorId:{_id:req.params.id}})
//     res.status(200).json({
//         message: 'success',
//         data: patient

//     })
// }
exports.findRecordById =async (req,res,next)=>{
    const patient = await DoctorAccessApppoinetment.find({doctorId:req.params.id})
    res.status(200).json({
        message: 'success',
        data: patient

    }) 
}


// exports.findAllRecords = (req,res,next)=>{
//     const patient = DoctorAccessApppoinetment.find( )
//     res.status(200).json({
//         message: 'success',
//         data: patient

//     })
// }


// exports.UpdateRecord = (req,res,next)=>{
//     const patient = DoctorAccessApppoinetment.findByIdAndUpdate({patientId:{_id:req.params.id}} , req.body, {new:true})
//     res.status(200).json({
//         message: 'success',
//         data: patient

//     })
// }


// exports.DeleteRecord = (req,res,next)=>{
//     const patient = DoctorAccessApppoinetment.findByIdAndDelete({patientId:{_id:req.params.id}})
//     res.status(200).json({
//         message: 'success',
//         data: patient

//     })
// }