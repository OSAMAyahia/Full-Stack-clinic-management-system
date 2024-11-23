const mongoose = require('mongoose')
const crypto =require('crypto')
const UserSchema=new mongoose.Schema({
    name:{type: String, required:true, maxlength:30}, 
    email:{ type:String, unique:true, match:[/.+\@.+\..+/, 'Please fill a valid email address'],},
    password:{type: String, required:true, minlength:6},
    // confirmPassword:{type:String, required:true, minlength:6},
    role:{type: String, enum: ['Doctor', 'Patient'], default: 'Patient'},
    SpecialtytId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Specialty',
        default: undefined 
    },
    createdAt: { type: Date, default: Date.now},
    isActive: { type: Boolean, default: true},
    passwordResetToken:  String,
    passwordResetExpires:  Date
    
}) 
UserSchema.methods.createcode=function(){
    const cosde =Math.floor(100000 + Math.random() * 900000).toString();
    this.passwordResetToken=crypto.createHash('sha256').update(cosde).digest('hex')
    this.passwordResetExpires=Date.now()+10*60*1000
    // عند عرض وقت انتهاء صلاحية إعادة تعيين كلمة المرور
const expiresInLocalTime = new Date(this.passwordResetExpires).toLocaleString('en-EG', { timeZone: 'Africa/Cairo' });

console.log('Password reset expires at (local time):', expiresInLocalTime);

    return cosde 
}
const user=mongoose.model('User',UserSchema )

module.exports=user