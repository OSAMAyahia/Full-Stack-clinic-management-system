import React from 'react';
 import Box from '@mui/material/Box'; // لإضافة بعض التنسيق على الصفحة
 import PermanentDrawerLeft from './../../DrawerDoctor';
import PatientRecordsTable from '../../Components/users/patientrecordscomp';

 
const DoctorViewReports = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <PermanentDrawerLeft/>  
      <PatientRecordsTable/>
      </Box>
  );
}

export default DoctorViewReports;
