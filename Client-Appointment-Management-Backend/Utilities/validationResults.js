const {validationResult}=require('express-validator')
const Erorrs=require('./ClassErorr')
const validationResults =(req,res,next)=>{
    const Err=validationResult(req)

    if (!Err.isEmpty()) {
        // next( new Erorrs(Err.array().msg,401))
        // const errorMessages = Err.array().map(error => error.msg);
        // return next(new Erorrs(errorMessages.join(', '), 401));
        return res.status(401).json({error: Err});
    }

    next()

} 

module.exports=validationResults