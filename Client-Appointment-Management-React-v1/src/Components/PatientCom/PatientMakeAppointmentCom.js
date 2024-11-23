import React, { useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetSpecialtyAction } from './../../Backend/Redux.js/Actions/SpecialtyAction';
import { motion } from 'framer-motion';

const ClinicList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetSpecialtyAction());
  }, [dispatch]);

  const specialties = useSelector((state) => state.SpecialtyReducers?.applist?.data || []);
  
  const handleClinicClick = (clinicId) => {
    navigate(`/clinics/${clinicId}/doctors`);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: '2rem' }}>
      <Typography variant="h4" gutterBottom align="center">
        Available clinics
      </Typography>

      <Grid container spacing={3}>
        {specialties.map((clinic) => (
          <Grid item xs={12} sm={6} md={4} key={clinic.id}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image='https://www.findatopdoc.com/var/fatd/storage/images/_aliases/article_main/expert/3186192-david-khasidy/8-fascinating-facts-about-internal-medicine/16533706-2-eng-US/8-Fascinating-Facts-about-Internal-Medicine.jpg'
                  alt={clinic.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {clinic.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
                    {clinic.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: '12px' }}
                    onClick={() => handleClinicClick(clinic._id)}
                  >
                    عرض الدكاترة
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ClinicList;
