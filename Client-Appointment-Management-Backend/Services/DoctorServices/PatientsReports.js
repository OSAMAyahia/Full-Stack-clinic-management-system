const medicalReport =require('../../Schema/Doctors/medicalReportSchema')


exports.CreatemedicalReport = async(req,res,next)=>{
    const patient=await medicalReport.create({
        patientId:req.body.patientId, 
        doctorId: req.currentUser._id ,
        date: req.body.date ,
        diagnosis: req.body.diagnosis,
        tests:  req.body.tests,
        treatmentPlan:  req.body.treatmentPlan,
        notes:  req.body.notes
    })


    res.status(200).json({
        message: 'success'

    })
}

exports.findRecordById = async (req, res, next) => {
    try {
      const patientRecords = await medicalReport.find({ patientId: req.currentUser._id }).lean();
      res.status(200).json({
        message: 'success',
        data: patientRecords
      });
    } catch (error) {
      next(error); // في حال وجود خطأ في القراءة
    }
  };
  


exports.findAllRecords = async(req,res,next)=>{
    const patient =await medicalReport.find( )
    res.status(200).json({
        message: 'success',
        data: patient

    })
}


exports.UpdateRecord = async(req,res,next)=>{
    const patient =await medicalReport.findByIdAndUpdate({patientId:req.body.id} , req.body, {new:true})
    res.status(200).json({
        message: 'success',
        data: patient

    })
}


exports.DeleteRecord = async(req,res,next)=>{
    const patient =await medicalReport.findByIdAndDelete({patientId:req.body.id})
    res.status(200).json({
        message: 'success',
        data: patient

    })
}