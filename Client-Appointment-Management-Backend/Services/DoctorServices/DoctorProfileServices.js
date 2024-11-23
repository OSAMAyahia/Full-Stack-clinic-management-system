const ProfileSchema=require('../../Schema/Doctors/ProfileSchema')


exports.CreateProfileDoc=async(req,res,next)=>{
        const doctor=await ProfileSchema.create({
            name:req.body.name,
            specialty:req.body.specialty,
            qualifications:req.body.qualifications,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber
        })

        res.status(201).json({
            messsage: "your phrofile has been created"
        })
}

exports.GetProfileDoctorById=async(req,res,next)=>{
    
    const doctor=await ProfileSchema.findById({name:{_id:req.params.id}}).populate("name", "Specialty")
    res.status(200).json({ message:'success',data: doctor})

}

