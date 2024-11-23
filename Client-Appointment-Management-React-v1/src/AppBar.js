import * as React from 'react';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Link, IconButton, Box } from '@mui/material';
import logo from './zoho-crm-removebg-preview.png'
import { useTheme } from '@mui/material/styles';
import { AuthContext } from './AuthContext';

const AppBars = ({ drawerOpen, toggleTheme }) => {  // إضافة دالة `toggleTheme` للتحكم في الثيم
  const drawerWidth = 240;
  const {setIsLoggedIn ,isLoggedIn}=React.useContext(AuthContext)

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (user && token){
      setIsLoggedIn(true);
    }
    // setIsLoggedIn(!!user && !!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/login';
  };
  const theme = useTheme();

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          margin: 0,
          backgroundColor: theme.palette.mode === 'dark' ? '#263238' : '#2C3E50', // الخلفية حسب الوضع
          color: theme.palette.mode === 'dark' ? '#ECEFF1' : '#1D1D1D', // النصوص حسب الوضع
          ml: drawerOpen ? `${drawerWidth}px` : '0',
          transition: 'ml 0.3s ease',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo and App Name */}
          <Box sx={{paddingLeft:"240px", display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="HealthSync Logo" style={{ width: 200, height: 70, marginRight: 8 }} /> {/* صورة اللوجو */}
            {/* <Link color="inherit" href="/" sx={{ textDecoration: "none" }}>
              <Typography  variant="h6" component="div">
                HealthSync ERP
              </Typography>
            </Link> */}
          </Box>

          {/* Right-side icons */}
          <Box sx={{ display: 'flex', alignItems: 'center' ,paddingRight:"60px" }}>
            {/* <IconButton onClick={toggleTheme} color="inherit" sx={{ mr: 2 }}>
              <Brightness4Icon />
            </IconButton> */}

            {isLoggedIn ? (
              <IconButton color="inherit" onClick={handleLogout} sx={{ display: "flex" }}>
                <LogoutIcon sx={{ cursor: "pointer" }} />
                <Typography sx={{ ml: "8px" }} variant="h6" component="div">
                  Logout
                </Typography>
              </IconButton>
            ) : (
              <Link color="inherit" href="/login" sx={{ textDecoration: "none", display: "flex" }}>
                <LoginIcon sx={{ cursor: "pointer" }} />
                <Typography sx={{ ml: "8px" }} variant="h6" component="div">
                  Login
                </Typography>
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBars;
