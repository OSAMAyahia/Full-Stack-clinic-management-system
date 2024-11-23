import React, { useState, useEffect, useContext } from 'react';
import { Box, TextField, Button, Typography, Paper, Link } from '@mui/material';
import { login } from '../Backend/Redux.js/Actions/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { toasty } from '../Utility/Toasty';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSignInAlt } from 'react-icons/fa';
import { AuthContext } from './../AuthContext';

const Loginpage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const selector = useSelector((state) => state.AllpationRecorder.lodegU);
const {setIsLoggedIn}=useContext(AuthContext)
  const handleLogin =async () => {
   await dispatch(login({ email, password }));
   setIsLoggedIn(true)
   };

  useEffect(() => {
    if (selector && selector.User && selector.jwt) {
      console.log(selector);
      localStorage.setItem('user', JSON.stringify(selector.User));
      localStorage.setItem('token', selector.jwt);
      toasty('Login successful!', 'success');
     setTimeout(()=>{ navigate('/')},[3000]);  // Navigate immediately after a successful login
    }
  }, [selector, navigate]); // Monitor changes in selector

  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     handleLogin();
  //   }
  // };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: '#f0f2f5',
        position: 'relative',
        backgroundImage: 'url("https://wallpaperaccess.com/full/8492559.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ width: '100%', height: '100%' }}
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
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'block'
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Login
          </Typography>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
            // onKeyPress={handleKeyPress}
            value={email}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
            // onKeyPress={handleKeyPress}
            value={password}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: '1rem' }}
            onClick={handleLogin}
            startIcon={
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9, rotate: -15 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ marginRight: '8px' }}
              >
                <FaSignInAlt />
              </motion.div>
            }
          >
            Enter
          </Button>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" ,marginTop : '32px' }}>
  <button className="styled-button">
    Login Now
    <div className="inner-button">
      <svg
        id="Arrow"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        width="30px"
        className="icon"
      >
        <defs>
          <linearGradient y2="100%" x2="100%" y1="0%" x1="0%" id="iconGradient">
            <stop style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} offset="0%" />
            <stop style={{ stopColor: '#AAAAA', stopOpacity: 1 }} offset="100%" />
          </linearGradient>
        </defs>
        <path
          fill="url(#iconGradient)"
          d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"
        ></path>
      </svg>
    </div>
  </button>
</Box>

           

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ ml: '8px', mr: '4px' }} variant="p" component="div">
              Don't have an account?
            </Typography>
            <Link color="inherit" href="/register" sx={{ textDecoration: 'none', display: 'flex' }}>
              Click here
            </Link>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Loginpage;
