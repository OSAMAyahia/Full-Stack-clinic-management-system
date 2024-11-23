const mongoose = require('mongoose');

const customerSchema=new mongoose.Schema({
    name:{type: String ,required:true ,maxlength:30}, 
    phoneNumber: {type: String ,required:true, unique:true , maxlength:14},
    email:{ type:String,unique:true,match:[/.+\@.+\..+/, 'Please fill a valid email address'],
    
    } 
})

module.exports=mongoose.model('Customer', customerSchema)