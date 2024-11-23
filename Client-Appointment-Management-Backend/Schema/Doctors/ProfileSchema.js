const mongoose = require('mongoose')

const ProfileSchema=new mongoose.Schema({
    name: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    specialty: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Specialty',
        required: true,
    },
    qualifications: { type: String },
         email: { type: String},
        phoneNumber: { type: String},
     

})

module.exports=mongoose.model('Profile',ProfileSchema)