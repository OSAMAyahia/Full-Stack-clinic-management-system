import React, { useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FindAllDorsBySpecialtytIdAction } from './../../Backend/Redux.js/Actions/PatientAction/FindAllDorsBySpecialtytId';
import { motion } from 'framer-motion';

const DoctorList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: clinicId } = useParams();

  useEffect(() => {
    if (clinicId) {
      dispatch(FindAllDorsBySpecialtytIdAction(clinicId));
    }
  }, [dispatch, clinicId]);

  const doctors = useSelector((state) => state.DorsBySpecialtytIdActionReducers?.applist?.data || []);
  
  const handleBookingClick = (doctorId) => {
    navigate(`/book-appointment/${clinicId}/${doctorId}`);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: '2rem' }}>
      <Typography variant="h4" gutterBottom align="center">
        DOCTORS
      </Typography>

      <Grid container spacing={3}>
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <Grid item xs={12} sm={6} md={4} key={doctor._id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image='https://img.freepik.com/premium-photo/cartoon-character-caucasian-man-doctor-wears-glasses-uniform-generative-ai_917213-17031.jpg'
                    alt={doctor.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {doctor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
                      {doctor.specialty}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ marginTop: '12px' }}
                      onClick={() => handleBookingClick(doctor._id)}
                    >
                      حجز موعد
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="text.secondary" align="center">
            لا توجد أطباء في هذه العيادة.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default DoctorList;
