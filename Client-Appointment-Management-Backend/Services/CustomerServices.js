const Customer=require("../Schema/Customer")
const catchAsync=require("../Utilities/CatchAync")

exports.CreateCustomer = catchAsync (async(req,res,next)=>{
   const customer=await Customer.create({
        name:req.body.name,
        phoneNumber:req.body.phoneNumber, 
        email:req.body.email,
         
    })
    res.status(201).json({status:'success', data: customer})
    
    })

   
exports.GetCustomer =catchAsync( async(req,res,next)=>{
 
     const customer=await Customer.findById({ _id:req.params.id})
    res.status(201).json({status:'success', data: customer})})
  
    
    
    exports.GetAllCustomers = async(req,res,next)=>{
          const customer=await Customer.find()
            res.status(201).json({ length: customer.length, status:'success', data: customer})}
            
            



exports.UpdateCustomer = catchAsync(async(req,res,next)=>{
       const customer=await Customer.findByIdAndUpdate({ _id:req.params.id}, req.body, {new:true})
     res.status(201).json({status:'success', data: customer})})
     
