import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Link, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createuser } from '../Backend/Redux.js/Actions/Auth';
import { GetSpecialtyAction } from './../Backend/Redux.js/Actions/SpecialtyAction';
import { ToastContainer } from 'react-toastify';
import { toasty } from './../Utility/Toasty';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // استيراد framer-motion
import { FaSignInAlt } from 'react-icons/fa';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // استدعاء useNavigate
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation_password, setConfirmationPassword] = useState('');
  const [role, setRole] = useState('');
  const [extraInfo, setExtraInfo] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleExtraInfoChange = (event) => {
    const selectedValue = event.target.value;
    setExtraInfo(selectedValue);
    console.log("Selected Specialty:", selectedValue);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmationPassword = (e) => {
    setConfirmationPassword(e.target.value);
  };

  const onClicks = async (e) => {
    e.preventDefault();
    if (name && email && password && confirmation_password) {
      console.log("the name", name, "the mail", email, password, confirmation_password);
      await dispatch(createuser({
        "name": name,
        "email": email,
        "password": password,
        "confirmPassword": confirmation_password,
        "role": role,
        "SpecialtytId": extraInfo
      }));
      toasty("your account has been successfully registered", "success");

      // انتظار لمدة 2 ثانية ثم إعادة التوجيه إلى صفحة تسجيل الدخول
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  };

  useEffect(() => {
    dispatch(GetSpecialtyAction());
  }, [dispatch]);

  const specialties = useSelector((state) => state.SpecialtyReducers?.applist?.data || []);
  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: '#f0f2f5',
        position: 'relative', // تأكد من أن العنصر له موضع نسبي
        backgroundImage: 'url("https://wallpaperaccess.com/full/8492559.jpg")', // استبدلها بعنوان الصورة
        backgroundSize: 'cover', // تأكد أن الصورة تغطي العنصر بالكامل
        backgroundPosition: 'center', // تأكد من تمركز الصورة داخل العنصر
        backgroundRepeat: 'no-repeat', // لا تكرر الصورة
      }}
    >
      <ToastContainer />
      
      {/* إضافة الحركة على الورقة Paper */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}  // البداية الشفافة والعنصر مرفوع قليلاً
        animate={{ opacity: 1, y: 0 }}    // النهاية مرئية والعنصر في مكانه الطبيعي
        transition={{ duration: 0.8 }}     // مدة الحركة
      >
        <Paper
          elevation={3}
          sx={{
            padding: '3rem',
            width: '500px',
            height: '600px',
            backgroundImage: 'url("https://terillium.com/wp-content/uploads/2018/07/HomePage-background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'white',
            position: 'absolute', // Use absolute positioning
            top: '50%', // Center vertically
            left: '50%', // Center horizontally
            transform: 'translate(-50%, -50%)', // Offset the Paper by 50% to truly center it
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Typography variant="h5" component="h1" gutterBottom align="center">
              Register
            </Typography>
          </motion.div>
          
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={onChangeName}
          />
          
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={onChangeEmail}
          />
          
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={onChangePassword}
          />
          
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={confirmation_password}
            onChange={onChangeConfirmationPassword}
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select value={role} onChange={handleRoleChange}>
              <MenuItem value="Doctor">Doctor</MenuItem>
              <MenuItem value="Patient">Patient</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </Select>
          </FormControl>

          {role === "Doctor" && (
            <FormControl fullWidth margin="normal">
              <InputLabel>Specialty</InputLabel>
              <Select value={extraInfo} onChange={handleExtraInfoChange}>
                {specialties.map((specialty) => (
                  <MenuItem key={specialty._id} value={specialty._id}>
                    {specialty.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: '1rem' }}
              onClick={onClicks}
              startIcon={
                <motion.div
                  whileHover={{
                    scale: 1.2, // enlarge the icon when hovered
                    rotate: 15, // rotate the icon a little
                  }}
                  whileTap={{
                    scale: 0.9, // shrink the icon when clicked
                    rotate: -15, // rotate it in the opposite direction when clicked
                  }}
                  transition={{
                    type: 'spring', // use a spring animation
                    stiffness: 300, // control the speed of the animation
                    damping: 20, // control the bounce of the animation
                  }}
                  style={{ marginRight: '8px' }}
                >
                  <FaSignInAlt />
                </motion.div>
              }
            >
              Enter
            </Button>
          </motion.div>

          <Box
            sx={{
              my: "5px",
              display: 'flex',
              alignItems: 'center',
              marginTop: '1rem'
            }}
          >
            <Typography sx={{ ml: "8px", mr: "4px" }} variant="body1" component="div">
              Haven't an account?    
            </Typography>
            <Link color="inherit" href="/login" sx={{ textDecoration: "none" }}>
              Click here
            </Link>
          </Box>
          
        </Paper>
      </motion.div>
    </Box>
  );
};

export default RegisterPage;
