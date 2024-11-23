import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PermanentDrawerLeft from '../DrawerDoctor';
import "../index"

const HomePage = () => {
  const navigate = useNavigate();
const USER= JSON.parse( localStorage.getItem("user"))
  const handleGetStarted = () => {
    navigate('/patient/book-appointment');
  };
  const handleGetStartedDoctor = () => {
    navigate('/doctor/appointments');
  };

  

  return (
    <div style={{ paddingLeft: "240px" }}>
      <PermanentDrawerLeft />

      <Box sx={{ textAlign: 'center', paddingLeft: "240px", padding: '2rem', overflowX: 'hidden' }}>
        
        {/* قسم الصورة والرسالة الترحيبية */}
        <Box
          sx={{
            minHeight:"350px",
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(https://cdn2.hubspot.net/hubfs/2488049/erp-medical-device-manufacturing-min.jpg)`,
            backgroundPosition: 'center',
            borderRadius: '8px',
            padding: '3rem',
            boxShadow: 3,
            animation: 'fadeIn 2s',
          }}
        >
         
        </Box>

        <Typography
      variant="h4"
      sx={{
        paddingTop: "20px", // إضافة padding أعلى
        color: "#2C3E50", // لون النص (يمكنك اختيار أي لون يناسبك)
        marginBottom: '20px', // إضافة margin أسفل النص
        fontWeight: 'bold', // جعل النص غامق
        fontFamily: "'Roboto', sans-serif", // اختيار نوع الخط (يمكنك تغيير ذلك إلى أي نوع تفضله)
        fontSize: '2rem', // تغيير حجم الخط (يمكنك ضبطه حسب الحاجة)
        letterSpacing: '1px', // ضبط تباعد الأحرف لزيادة الجمالية
        textAlign: 'center', // توسيط النص
        animation: 'slideIn 1.5s', // إضافة تأثير الرسوم المتحركة
      }}
    >
      Welcome to Our Platform!
    </Typography>

        {/* زر الانتقال */}
        {
          USER.role==="Patient" ? ( <Button 
            onClick={handleGetStarted} 
            variant="contained" 
            color="primary" 
            sx={{ marginTop: '1rem', animation: 'buttonBounce 2s infinite' }}
          >
            Get Started
          </Button>) : (
            ( <Button 
              onClick={handleGetStartedDoctor} 
              variant="contained" 
              color="primary" 
              sx={{ marginTop: '1rem', animation: 'buttonBounce 2s infinite' }}
            >
              Get Started
            </Button>)
          )
        }
       
      </Box>
    </div>
  );
};

export default HomePage;
