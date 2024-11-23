import React from 'react';
 import Box from '@mui/material/Box'; // لإضافة بعض التنسيق على الصفحة
 import PermanentDrawerLeft from './../../../DrawerDoctor';
 import PatientAppointmentCard from './../../../Components/PatientCom/PatientViewHisAppointmentCom';

  
const PatientViewHisAppintment = () => {
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
        <PatientAppointmentCard/>
         </Box>
    </Box>
  );
}

export default PatientViewHisAppintment;
