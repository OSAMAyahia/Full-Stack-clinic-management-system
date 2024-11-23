import React, { useEffect, useState } from 'react';
import { Button, TextField, Grid, Paper, Typography, Box, IconButton, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { DoctorGetAppointment } from '../../Backend/Redux.js/Actions/DoctorActions/DocAppointmentActions';
import { useDispatch, useSelector } from 'react-redux';

export default function DoctorAppointMAINscom() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.DoctorApoointmetReducers.applist);
  const [appointments, setAppointments] = useState([]);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [doctorNotes, setDoctorNotes] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user._id;

    const getData = async () => {
      await dispatch(DoctorGetAppointment(id));
    };
    getData();
  }, [dispatch]);

  // عند تحديث البيانات في Redux
  useEffect(() => {
    if (selector && selector.data) {
      setAppointments(selector.data);
    }
  }, [selector]);

  const handleEdit = (appointment) => {
    setEditingAppointment(appointment);
    setAppointmentDate(appointment.date.split('T')[0]);
    setAppointmentTime(appointment.time);
    setAppointmentType(appointment.status);
    setDoctorNotes(appointment.notes);
  };

  const handleUpdate = () => {
    const updatedAppointments = appointments.map((appointment) =>
      appointment.id === editingAppointment.id
        ? {
            ...appointment,
            date: appointmentDate,
            time: appointmentTime,
            status: appointmentType,
            notes: doctorNotes
          }
        : appointment
    );
    setAppointments(updatedAppointments);
    clearForm();
  };

  const clearForm = () => {
    setAppointmentDate('');
    setAppointmentTime('');
    setAppointmentType('');
    setDoctorNotes('');
    setEditingAppointment(null);
  };

  return (
    <Paper sx={{ padding: '2rem', boxShadow: 3 }}>
      <Typography variant="h5" gutterBottom>
        {editingAppointment ? 'Edit Appointment' : 'Appointments List'}
      </Typography>

      {/* Displaying Appointments */}
      <Grid container spacing={2}>
        {appointments.map((appointment) => (
          <Grid item xs={12} sm={6} key={appointment.id}>
            <Paper sx={{ padding: '1rem', marginBottom: '1rem' }}>
              <Typography variant="h6">{appointment.date.split('T')[0]}</Typography>
              <Typography variant="body1">Time: {appointment.time}</Typography>
              <Typography variant="body2">Status: {appointment.status}</Typography>
              <Typography variant="body2">Notes: {appointment.notes}</Typography>
              <Divider sx={{ marginY: '1rem' }} />
              <Box>
                <IconButton color="primary" onClick={() => handleEdit(appointment)}>
                  <EditIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Editing Appointment */}
      {editingAppointment && (
        <Box sx={{ marginTop: '2rem' }}>
          <Typography variant="h6">Edit Appointment</Typography>
          <Grid container spacing={3}>
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

            <Grid item xs={12} sm={6}>
              <TextField
                label="Appointment Status"
                fullWidth
                value={appointmentType}
                onChange={(e) => setAppointmentType(e.target.value)}
              />
            </Grid>

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

          <Box sx={{ marginTop: '20px' }}>
            <Button variant="contained" color="primary" fullWidth onClick={handleUpdate}>
              Update Appointment
            </Button>
          </Box>
        </Box>
      )}
    </Paper>
  );
}
