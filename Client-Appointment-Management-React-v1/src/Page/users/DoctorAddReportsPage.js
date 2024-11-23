import React from 'react';
 import PermanentDrawerLeft from '../../DrawerDoctor';
import Box from '@mui/material/Box'; // لإضافة بعض التنسيق على الصفحة
 
 import {PatientReportForm} from './../../Components/users/DoctorAddReport';

const DoctorAddReportsPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <PermanentDrawerLeft/>  
        <PatientReportForm/>
     </Box>
  );
}

export default DoctorAddReportsPage;
