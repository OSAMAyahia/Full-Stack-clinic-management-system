import React from 'react';
 import PermanentDrawerLeft from '../../DrawerDoctor';
import Box from '@mui/material/Box'; // لإضافة بعض التنسيق على الصفحة
import PatientMedicalTable from './../../Components/users/patientmedicalcomp copy';
import DoctorAppointmentscom from '../../Components/users/Appointmentcom';
import DoctorList from './../../Components/PatientCom/DoctorList';
 
const PatientMedicalTablepage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <PermanentDrawerLeft/> {/* إضافة الـ sidebar */}
      <Box
        component="main"
        sx={{
          flexGrow: 1, 
          bgcolor: (theme) => theme.palette.background.default, // يمكن تخصيص اللون الخلفي حسب التصميم
          padding: 3, // إضافة padding حول المحتوى
        }}
      >
        <DoctorList/>
       </Box>
    </Box>
  );
}

export default PatientMedicalTablepage;
