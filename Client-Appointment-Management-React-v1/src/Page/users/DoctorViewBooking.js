import React from 'react';
 import PermanentDrawerLeft from '../../DrawerDoctor';
import Box from '@mui/material/Box'; // لإضافة بعض التنسيق على الصفحة
 
import AppointmentsList from './../../Components/users/AppointmentsList';

const AppointmentsLists = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <PermanentDrawerLeft/>  
        <AppointmentsList/>
     </Box>
  );
}

export default AppointmentsLists;
