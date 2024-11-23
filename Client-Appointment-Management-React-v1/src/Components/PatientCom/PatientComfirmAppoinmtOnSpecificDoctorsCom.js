import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toasty } from '../../Utility/Toasty';
import { constPatientComfirmAppointment } from './../../Backend/Redux.js/Actions/PatientAction/PatientMakeAppointmentsComfirm';
import { DoctorGetAppointment } from '../../Backend/Redux.js/Actions/DoctorActions/DocAppointmentActions';

export default function PatientComfirmAppoinmtOnSpecificDoctorsCom() {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [AppointmentType, setAppointmentType] = useState('Detection');
  const [status, setStatus] = useState('Scheduled');
  
  const { clinicId, doctorId } = useParams();
  const user = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (user && user._id && doctorId && clinicId) {
      await dispatch(
        constPatientComfirmAppointment({
          patientId: user._id,
          doctorId,
          Specialty: clinicId,
          appointmentDate,
          time:appointmentTime,
          AppointmentType,
          status
        })
      );

      toasty("Your appointment has been booked successfully", 'success');

      setAppointmentDate('');
      setAppointmentTime('');
      setAppointmentType('Detection');
      setStatus('Scheduled');

      setTimeout(() => {
        navigate('/patient/my-appointments');
      }, 4000);
    } else {
      console.error("Required IDs are missing.");
    }
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      await dispatch(DoctorGetAppointment(doctorId));
    };
    fetchAppointments();
  }, [dispatch, doctorId]);

  const availableAppointment = useSelector(state => state.DoctorApoointmetReducers.applist);
let availableAppointments;
  if (availableAppointment && availableAppointment.data){
  availableAppointments=availableAppointment.data
}
  return (
    <Box sx={{ flexGrow: 1, padding: '2rem' }}>
      <ToastContainer />
      <Paper sx={{ padding: '2rem', boxShadow: 3, width: "100%" }}>
        <Typography variant="h5" gutterBottom>
          Book an Appointment
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Appointment Date</InputLabel>
              <Select
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
              >
                {availableAppointments && availableAppointments.map((appointment) => (
                  <MenuItem key={appointment._id} value={appointment.date}>
                    {new Date(appointment.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Appointment Time</InputLabel>
              <Select
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
              >
                {availableAppointments && availableAppointments
                  .filter(appt => appt.date === appointmentDate)
                  .map((appointment) => (
                    <MenuItem key={appointment._id} value={appointment.time}>
                      {appointment.time}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Appointment Type</InputLabel>
              <Select
                value={AppointmentType}
                onChange={(e) => setAppointmentType(e.target.value)}
              >
                <MenuItem value="Detection">Detection</MenuItem>
                <MenuItem value="Consultation">Consultation</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="Scheduled">Scheduled</MenuItem>
                <MenuItem value="Confirmed">Confirmed</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Save Appointment
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
