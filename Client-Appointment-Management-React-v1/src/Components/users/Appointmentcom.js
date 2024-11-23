import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, MenuItem, Select, InputLabel, FormControl, Container } from '@mui/material';
import { DoctorAddAppointmentList } from './../../Backend/Redux.js/Actions/DoctorActions/DocAppointmentActions';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { toasty } from '../../Utility/Toasty';

export default function DoctorAppointmentscom() {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [status, setstatus] = useState('');
  const [doctorNotes, setDoctorNotes] = useState('');
const drawerWidth=250
const dispatch=useDispatch()
const user=JSON.parse(localStorage.getItem('user'))
  const handleSubmit = async() => {
    console.log(user._id)
    await dispatch(DoctorAddAppointmentList({
      "doctorId":user._id,
      "date":  appointmentDate,
      "time":  appointmentTime,
      "status": status ,
      "notes":  doctorNotes
    }))
    toasty("Your appointment has been added successfully", 'success')
    setAppointmentDate('')
      setAppointmentTime('' )
      setstatus('')
      setDoctorNotes('')
  };

  return (
    <Box width={{width: `calc(100% - ${drawerWidth}px)` ,}} sx={{ ml:"250px",display:"flex", justifyContent: 'center', paddingTop: '20px' }}>
<ToastContainer/>
       <Paper sx={{ padding: '2rem', boxShadow: 3 ,width:"98%"}}>
        <Typography variant="h5" gutterBottom>
          Add Appointment Schedule
        </Typography>
        <Grid container spacing={3}>
          {/* Date Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Appointment Date"
              type="date"
              fullWidth
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          {/* Time Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Appointment Time"
              type="time"
              fullWidth
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          {/* Appointment Type Field */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Appointment Type</InputLabel>
              <Select
                value={status}
                onChange={(e) => setstatus(e.target.value)}
                // label="Appointment Type"
                label="Appointment Type"
              >
                {/* <MenuItem value="consultation">Consultation</MenuItem>
                <MenuItem value="follow-up">Follow-up</MenuItem>
                <MenuItem value="emergency">Emergency</MenuItem> */}
                <MenuItem value="Available">Available</MenuItem>  
                <MenuItem value="Unavailable">Unavailable</MenuItem>  
              </Select>
            </FormControl>
          </Grid>

          {/* Doctor's Notes Field */}
          <Grid item xs={12}>
            <TextField
              label="Doctor's Notes"
              multiline
              rows={4}
              fullWidth
              value={doctorNotes}
              onChange={(e) => setDoctorNotes(e.target.value)}
            />
          </Grid>
        </Grid>

        {/* Save Button */}
        <Box sx={{ marginTop: '20px' }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Save Appointment
          </Button>
        </Box>
      </Paper>
        </Box>
   );
}
