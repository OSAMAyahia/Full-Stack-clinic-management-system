const specialtySchema =require('../Schema/MedicalCenter/Specialty')


exports.Createspecialty = async(req,res,next)=>{
    const Doctor=await specialtySchema.create({
        name: req.body.name, 
        description:  req.body.description
    })


    res.status(200).json({
        message: 'success'

    })
}

// exports.findRecordById = (req,res,next)=>{
//     const Doctor = specialtySchema.findById({_id:{_id:req.params.id}})
//     res.status(200).json({
//         message: 'success',
//         data: Doctor

//     })
// }


exports.findspecialty =async (req,res,next)=>{
    const patient =await specialtySchema.find( )
    res.status(200).json({
        message: 'success',
        length:patient.length,
        data: patient

    })
}


exports.Updatespecialty =async(req,res,next)=>{
    const Doctor =await specialtySchema.findByIdAndUpdate({_id:req.params.id} , req.body, {new:true})
    res.status(200).json({
        message: 'success',
        data: Doctor

    })
}


exports.Deletespecialty =async (req,res,next)=>{
    const Doctor =await specialtySchema.findByIdAndDelete({_id:req.params.id})
    res.status(200).json({
        message: 'success',
        data: Doctor

    })
}