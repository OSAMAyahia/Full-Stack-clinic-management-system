import * as React from 'react';
import { useEffect, useState } from 'react';
import { Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, CssBaseline } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import CalendarViewWeekOutlinedIcon from '@mui/icons-material/CalendarViewWeekOutlined';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const drawerWidth = 240;

// روابط الدكتور
const doctorLinks = [
  { text: 'Profile', icon: <AccountCircleIcon />, path: '/doctor/profile' },
  { text: 'Appointments Schedule', icon: <CalendarTodayIcon />, path: '/doctor/appointments' },
  { text: 'Patient Records', icon: <FolderIcon />, path: '/doctor/records' },
  { text: 'Medical Reports', icon: <DescriptionIcon />, path: '/doctor/reports' },
  { text: 'Manage Appointments', icon: <EditIcon />, path: '/doctor/manage-appointments' },
  { text: 'Patient Bookings', icon: <CalendarViewWeekOutlinedIcon />, path: '/doctor/view-patient-bookings' },
  { text: 'Add Report', icon: <PostAddIcon />, path: '/doctor/add-report' },
];

// روابط المريض
const patientLinks = [
  { text: 'Profile', icon: <AccountCircleIcon />, path: '/patient/profile' },
  { text: 'Book Appointment', icon: <CalendarTodayIcon />, path: '/patient/book-appointment' },
  { text: 'My Appointments', icon: <AccessTimeIcon />, path: '/patient/my-appointments' },
  { text: 'Patient Record', icon: <ReceiptLongOutlinedIcon />, path: '/patient/record' },
  { text: 'Patient Report', icon: <AssignmentIcon />, path: '/patient/Report' },
];

export default function App() {
  const navigate = useNavigate();
  const [themeMode, setThemeMode] = useState(localStorage.getItem('themeMode') || 'dark'); // قراءة الثيم من localStorage
  const [links, setLinks] = useState([]);

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  const toggleTheme = () => {
    const newThemeMode = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(newThemeMode);
    localStorage.setItem('themeMode', newThemeMode); // تحديث الثيم في localStorage
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (!user || !token) {
      navigate('/login');
    } else {
      const parsedUser = JSON.parse(user);
      const userRole = parsedUser.role;
      setLinks(userRole === 'Doctor' ? doctorLinks : patientLinks);
    }
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          {/* زر تبديل الوضع */}
          <IconButton onClick={toggleTheme} color="inherit">
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
        <Divider />
        
        <List>
          {links.map((link) => (
            <ListItem key={link.text} disablePadding>
              <ListItemButton component={Link} to={link.path}>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </ThemeProvider>
  );
}
