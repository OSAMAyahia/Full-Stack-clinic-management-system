import React from 'react';
 import PermanentDrawerLeft from '../../DrawerDoctor';
import Box from '@mui/material/Box'; // لإضافة بعض التنسيق على الصفحة
import PatientMedicalTable from './../../Components/users/patientmedicalcomp copy';
import DoctorAppointmentscom from '../../Components/users/Appointmentcom';
import DoctorAppointMAINscom from './../../Components/users/Managedocappcom';

const Doctormanageappointpage = () => {
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
        <DoctorAppointMAINscom/> {/* عرض الجدول داخل الـ main */}
      </Box>
    </Box>
  );
}

export default Doctormanageappointpage;
