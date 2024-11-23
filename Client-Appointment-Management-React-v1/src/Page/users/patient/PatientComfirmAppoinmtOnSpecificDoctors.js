import React from 'react';
 import Box from '@mui/material/Box'; // لإضافة بعض التنسيق على الصفحة
 import PermanentDrawerLeft from './../../../DrawerDoctor';
import PatientComfirmAppoinmtOnSpecificDoctorsCom from './../../../Components/PatientCom/PatientComfirmAppoinmtOnSpecificDoctorsCom';

  
const PatientComfirmAppoinmtOnSpecificDoctors = () => {
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
        <PatientComfirmAppoinmtOnSpecificDoctorsCom/>
        </Box>
    </Box>
  );
}

export default PatientComfirmAppoinmtOnSpecificDoctors;
