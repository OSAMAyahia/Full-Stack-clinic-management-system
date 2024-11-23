import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { PatientGetHisAppointmentAction } from '../../Backend/Redux.js/Actions/PatientAction/PatientMakeAppointmentsComfirm';

export default function PatientAppointmentCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PatientGetHisAppointmentAction());
  }, [dispatch]);

  const appointmentDetails = useSelector((state) => state.PatientGetHisAppointments?.applist?.data || []);
  console.log("appointmentDetails", appointmentDetails);

  return (
    <Grid container spacing={2}>
      {appointmentDetails.map((appointment) => (
        <Grid item xs={12} sm={6} key={appointment._id}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Patient Appointment Details
              </Typography>

              <Box mb={1}>
                <Typography variant="body2" color="textSecondary">Patient ID:</Typography>
                <Typography variant="body1">{appointment.PatientID}</Typography>
              </Box>

              <Box mb={1}>
                <Typography variant="body2" color="textSecondary">Doctor ID:</Typography>
                <Typography variant="body1">{appointment.doctorId}</Typography>
              </Box>

              <Box mb={1}>
                <Typography variant="body2" color="textSecondary">Specialty:</Typography>
                <Typography variant="body1">{appointment.Specialty}</Typography>
              </Box>

              <Box mb={1}>
                <Typography variant="body2" color="textSecondary">Appointment Date:</Typography>
                <Typography variant="body1">
                  {new Date(appointment.appointmentDate).toLocaleDateString()}
                </Typography>
              </Box>

              <Box mb={1}>
                <Typography variant="body2" color="textSecondary">Appointment Type:</Typography>
                <Typography variant="body1">{appointment.AppointmentType}</Typography>
              </Box>
              <Box mb={1}>
                <Typography variant="body2" color="textSecondary">Appointment Time:</Typography>
                <Typography variant="body1">{appointment.time}</Typography>
              </Box>

              <Box>
                <Typography variant="body2" color="textSecondary">Status:</Typography>
                <Typography variant="body1">{appointment.status}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
