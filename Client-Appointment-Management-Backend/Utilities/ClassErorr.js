class Erorrs extends Error {
    constructor(message,statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperationalError=true;
        this.status= `${statusCode}`.startsWith('4') ? "error" : "fail" 
     }
} 
 
module.exports=Erorrs;