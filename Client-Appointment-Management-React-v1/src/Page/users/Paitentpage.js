import React from 'react';
import PatientRecordsTable from '../../Components/users/patientrecordscomp';
import PermanentDrawerLeft from '../../DrawerDoctor';
import Box from '@mui/material/Box'; // لإضافة بعض التنسيق على الصفحة

const Paitentpage = () => {
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
        <PatientRecordsTable/> {/* عرض الجدول داخل الـ main */}
      </Box>
    </Box>
  );
}

export default Paitentpage;
