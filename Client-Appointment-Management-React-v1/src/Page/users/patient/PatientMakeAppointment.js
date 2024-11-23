import React from 'react';
 import Box from '@mui/material/Box'; // لإضافة بعض التنسيق على الصفحة
 
 import PermanentDrawerLeft from './../../../DrawerDoctor';
import ClinicList from './../../../Components/PatientCom/PatientMakeAppointmentCom';

const PatientMakeAppointment = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <PermanentDrawerLeft/>
      <ClinicList/>  
      </Box>
  );
}

export default PatientMakeAppointment;
