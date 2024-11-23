const env=require('dotenv');
const mongoose=require('mongoose');
const express=require('express');
const AppointmentRoutes=require('./Routes/AppointmentRoutes')
const cusrtomer=require('./Routes/CustomerRoutes');
const user=require('./Routes/UserRoutes');
const Erorrs=require('./Utilities/ClassErorr');
const specialtyRoute=require('./Routes/specialtyRoutes');
const recordRoute=require('./Routes/PaitentRecordRoutes');
const ReportsRoute=require('./Routes/PatientsReportsRoutes');
const DoctorProfile=require('./Routes/DoctorProfileServicesRoutes');
const DoctorAppointment=require('./Routes/DoctorAppointmentRoutes');
const DoctorAccessPatientAppointments=require('./Routes/DoctorAccessApppoinetmentRoutes');
const app=express();
app.use(express.json());
env.config({path:'.env'})
mongoose.connect(process.env.URL).then(()=>{console.log('connect to database');})
// .catch(err=>{console.log(err);});
const cors = require('cors');
const morgan = require('morgan');
const allowedOrigins = ['http://localhost:3000', 'http://192.168.1.75:3000'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
})); 
app.use(morgan('dev'))
app.use('/api/v1/apointment',AppointmentRoutes);
app.use('/api/v1/cusrtomer',cusrtomer)
app.use('/api/v1/user',user)
app.use('/api/v1/specialty',specialtyRoute)
app.use('/api/v1/record',recordRoute)
app.use('/api/v1/report',ReportsRoute)
app.use('/api/v1/doctorprofile',DoctorProfile)
app.use('/api/v1/doctorappointment',DoctorAppointment)
app.use('/api/v1/docaccpappo',DoctorAccessPatientAppointments)
app.all("*" , (req,res,next)=> 
{  
    // const err = new Error(`cannot find ${req.originalUrl}`)
    const err = new Erorrs("`cannot find ${req.originalUrl}" , 401)
 next(err)}
)
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
  
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  });  
  
 const ServerListen= app.listen(process.env.PORT,()=>console.log('listening on port '+process.env.PORT));  
  process.on('unhandledRejection' , (err)=>{
      console.log("the Error name is:",err.name , "|", "and the messeage is: ", err.message)
      ServerListen.close(()=> process.exit(1))
     
  }) 
 