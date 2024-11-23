const PatientRecord=require('../../Schema/Doctors/PatientRecords')


exports.CreatePatientRecord = async(req,res,next)=>{
    const patient=await PatientRecord.create({
        patientId: req.currentUser._id,
        chronicDiseases: req.body.chronicDiseases ,
        medications:  req.body.medications,
        allergies: req.body.allergies ,
        medicalHistory: req.body.medicalHistory
    })


    res.status(200).json({
        message: 'success'

    })
}

exports.findRecordById = async(req,res,next)=>{
    const patient =await PatientRecord.find({patientId:req.currentUser._id})
    res.status(200).json({
        message: 'success',
        data: patient

    })
}


exports.findAllRecords = async(req,res,next)=>{
    const patient =await PatientRecord.find( )
    res.status(200).json({
        message: 'success',
        data: patient

    })
}


exports.UpdateRecord = async(req,res,next)=>{
    const patient =await PatientRecord.findByIdAndUpdate({patientId:{_id:req.params.id}} , req.body, {new:true})
    res.status(200).json({
        message: 'success',
        data: patient

    })
}


exports.DeleteRecord = async(req,res,next)=>{
    const patient =await PatientRecord.findByIdAndDelete({patientId:{_id:req.params.id}})
    res.status(200).json({
        message: 'success',
        data: patient

    })
}