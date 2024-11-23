 const User = require('../Schema/User')
const jwt=require('jsonwebtoken')
const bcryptjs=require('bcryptjs')
const email=require('../Utilities/Sendmail')
const crypto =require('crypto')
const generatePasswordResetTemplate = require('../Utilities/html'); // استدعاء قالب MJML

const token=(user)=>{
    return jwt.sign({id:user._id}, process.env.SECRETKEY, {expiresIn:process.env.EX})
}

const bcrypt= async(password)=>{
    return await bcryptjs.hash(password,12)
}
exports.signup=async(req,res)=>{
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    if (password !== confirmPassword){
        return res.status(400).json({message: 'Passwords and confirmpassword do not match'})
    }
    if (req.body.role==='Doctor' && !req.body.SpecialtytId){
        return res.status(400).json({message: 'SpecialtytId does not exist'})
    } 
    const pass=await bcrypt(password) 
    const user =await User.create({
        name:req.body.name, 
        email:req.body.email, 
        password: pass,
        role:req.body.role,
        SpecialtytId : req.body.role==='Doctor' ? req.body.SpecialtytId : undefined
     })

    res.status(201).json({
        status: 'success',
        message: 'User created successfully',
        User: user,
        jwt: token(user)
 
    })
}
exports.login=async(req,res)=>{
    const email = req.body.email
    const user=await User.findOne({ email: email})
     if (!user){
        return res.status(400).json({message: 'User not found'})
    }
    const password = req.body.password
    

    const pass=await bcryptjs.compare(password,user.password)
    // console.log(pass)
    if (!pass){
        return res.status(400).json({message: 'Incorrect password'})
    }
    

    res.status(200).json({
        status: 'success',
        message: 'login successfully',
        User: user,
        jwt: token(user)
 
    })

    console.log(req.headers)
} 


exports.protect=async(req, res,next) => {
    // console.log(req.headers)
    if (!req.headers || !req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
        return res.status(401).json({ message: 'please login first' })
    } 

    const Bearer=req.headers.authorization.split(' ')[1]
    const jwtoken=jwt.verify(Bearer,process.env.SECRETKEY)

    const user=await User.findById(jwtoken.id)

    console.log("the current user is",user)
    req.currentUser = user
    next()
}


exports.restectedto= (...r) => {

    return (req,res,next)=>{
       if (!r.includes(req.currentUser.role)){
            return res.status(401).json({message: "you are not allowed to access this"}) 
       }
       next()
    }
   
}


exports.forgetpassword = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const resetCode = user.createcode(); // إنشاء كود الاستعادة
    await user.save({ validateBeforeSave: false });

    // رسالة النص العادي كنسخة احتياطية
    const message = `Hello ${user.name},\n\nWe received a request to reset the password for your account. Use the code below:\n\nReset Code: ${resetCode}\n\nIf you didn’t request this, ignore this message.`;

    // قالب HTML باستخدام MJML
    const htmlContent = generatePasswordResetTemplate(user.name, resetCode);

    await email({
        email: user.email,
        subject: 'Your Password Reset Code (Keep it secure)',
        message: message,
        html: htmlContent
    });

    res.status(200).json({
        status: 'success',
        message: "Reset code has been sent to your email!"
    });
};
exports.resetpassword=async (req,res,next ) => {
        const resetcode =req.body.resetcode;
        passwordResetTokens=crypto.createHash('sha256').update(resetcode).digest('hex')

        const user=await User.findOne({passwordResetToken: passwordResetTokens , passwordResetExpires: {$gt:Date.now()} })
        if (!user) return res.status(404).json({ status: "error", message: "this code is not true" })
            if (req.body.password !== req.body.confirmPassword) return res.status(404).json({ status: "failure", message: "password and confirm password are not the same" })
                const pass=await bcrypt(req.body.password)

        user.password=pass
    user.passwordResetToken=undefined
    user.passwordResetExpires=undefined
    await user.save()
    res.status(200).json({ status: "success", message: 'your password has been changed' })


            
}
exports.FindDoctorBySecialtyId=async (req,res,next ) => {
        const user=await User.find({SpecialtytId: req.params.id})
         
    res.status(200).json({ status: "success", message: 'your password has been changed', data:user })


            
}
