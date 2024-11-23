import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Container, Select, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DoctorGetAppointmentList } from './../../Backend/Redux.js/Actions/DoctorActions/DocGetAppointmentList';

// const appointments = [
//     {
//         _id: "6731e3a1a230a5b713f10fb9",
//         PatientID: "6731e258a230a5b713f10fb5",
//         doctorId: "6731dd705ab13582456c1e8d",
//         Specialty: "6731dd705ab13582456c1e8d",
//         appointmentDate: "2024-11-30T00:00:00.000+00:00",
//         AppointmentType: "Consultation",
//         status: "Scheduled",
//         createdAt: "2024-11-11T10:59:45.985+00:00"
//     },
//     {
//         _id: "6731e3a1a230a5b713f10fc0",
//         PatientID: "6731e258a230a5b713f10fb6",
//         doctorId: "6731dd705ab13582456c1e8d",
//         Specialty: "6731dd705ab13582456c1e8d",
//         appointmentDate: "2024-12-01T00:00:00.000+00:00",
//         AppointmentType: "Detection",
//         status: "Confirmed",
//         createdAt: "2024-11-11T11:00:00.000+00:00"
//     } 
// ];

const AppointmentsList = () => {
const dispatch=useDispatch()

const user=JSON.parse( localStorage.getItem("user"))
let id ;
if (user && user._id){
    id=user._id
}

useEffect(()=>{
    const Appointments=async()=>{
        console.log("id is",id)
     await  dispatch( DoctorGetAppointmentList(id))

    }
    Appointments()
},[id])
const selector=useSelector((state)=>state.DoctorGetListReducer.applist)
let appointments
if (selector && selector.data){
      appointments=selector.data
 }


 return (
    <Container sx={{ padding: "25px" }}>
        <Grid container spacing={3}>
            {appointments && appointments.length > 0 ? (
                appointments.map((appointment) => (
                    <Grid item xs={12} md={6} lg={4} key={appointment._id}>
                        <Card variant="outlined" sx={{ borderRadius: '10px', boxShadow: 2 }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                    Patient Appointment
                                </Typography>
                                <Divider sx={{ mb: 2 }} />
                                
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>
                                    Appointment ID:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {appointment._id}
                                </Typography>

                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>
                                    Patient ID:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {appointment.PatientID}
                                </Typography>

                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>
                                    Doctor ID:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {appointment.doctorId}
                                </Typography>

                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>
                                    Specialty:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {appointment.Specialty}
                                </Typography>

                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>
                                    Appointment Date:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {new Date(appointment.appointmentDate).toLocaleDateString()}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>
                                    Appointment Time:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    { appointment.time  }
                                </Typography>

                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>
                                    Appointment Type:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {appointment.AppointmentType}
                                </Typography>

                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>
                                    Status:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {appointment.status}
                                </Typography>

                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>
                                    Created At:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {new Date(appointment.createdAt).toLocaleDateString()}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            ) : (
                <Typography variant="h6" color="text.secondary" align="center" sx={{ width: '100%', mt: 3 }}>
                    No appointments available.
                </Typography>
            )}
        </Grid>
    </Container>
);
};

export default AppointmentsList;
