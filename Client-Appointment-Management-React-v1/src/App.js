import * as React from 'react';
import { createTheme, CssBaseline, ThemeProvider, IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './Page/HomePage';
import Loginpage from './Page/Loginpage';
import Regesterpage from './Page/RegesterPage';
import ProfilePage from './Page/users/ProfilePage';
import Doctoraddappointmentpage from './Page/users/Doctoraddappointmentpage';
import Paitentpage from './Page/users/Paitentpage';
import Doctormanageappointpage from './Page/users/Doctormanageappointpage';
import PatientMedicalTablepage from './Page/users/PatientMedicalTablepage';
import AppointmentsLists from './Page/users/DoctorViewBooking';
import DoctorAddReportsPage from './Page/users/DoctorAddReportsPage';
import AppBars from './AppBar';
import PatientMakeAppointment from './Page/users/patient/PatientMakeAppointment';
import PatientComfirmAppoinmtOnSpecificDoctors from './Page/users/patient/PatientComfirmAppoinmtOnSpecificDoctors';
import PatientViewHisAppintment from './Page/users/patient/PatientViewHisAppintment';
import DoctorViewReports from './Page/users/DoctorViewReports';
import PatientViewHisRecordpage from './Page/users/patient/PaientViewHisRecord';
import PatientViewHisReportpage from './Page/users/patient/PatientViewHisReport';

const App = () => {
  // إعداد الـ theme من localStorage أو الوضع الافتراضي
  const [themeMode, setThemeMode] = React.useState(localStorage.getItem('theme') || 'dark');

  // إنشاء الـ theme
  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  // دالة لتغيير الوضع
  const toggleTheme = () => {
    const newTheme = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme); // تخزين الوضع
  };

  // المكون الرئيسي
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* يجب أن يكون كل شيء متعلق بالـ Router داخل <BrowserRouter> */}
      <BrowserRouter>
        {/* استدعاء المكون الداخلي */}
        <InnerApp toggleTheme={toggleTheme} themeMode={themeMode} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

// مكون داخلي يستخدم useLocation
const InnerApp = ({ toggleTheme, themeMode }) => {
  const location = useLocation(); // استدعاء useLocation داخل السياق الصحيح

  const paths = ["/login", "/register"];
  const hidenav = paths.includes(location.pathname); // التحقق إذا كنا في صفحة تحتاج إخفاء AppBars

  return (
    <>
      {!hidenav && <AppBars />} {/* إظهار الـ Navbar إذا لم نكن في صفحة تسجيل الدخول */}
      {/* زر لتبديل الوضع */}
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        sx={{ position: 'absolute', top: 16, right: 16 }}
      >
        {themeMode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Regesterpage />} />
        <Route path="/doctor/profile" element={<ProfilePage />} />
        <Route path="/patient/profile" element={<ProfilePage />} />
        <Route path="/doctor/appointments" element={<Doctoraddappointmentpage />} />
        <Route path="/doctor/records" element={<Paitentpage />} />
        <Route path="/doctor/reports" element={<DoctorViewReports />} />
        <Route path="/doctor/manage-appointments" element={<Doctormanageappointpage />} />
        <Route path="/doctor/view-patient-bookings" element={<AppointmentsLists />} />
        <Route path="/doctor/add-report" element={<DoctorAddReportsPage />} />
        <Route path="/patient/book-appointment" element={<PatientMakeAppointment />} />
        <Route path="/clinics/:id/doctors" element={<PatientMedicalTablepage />} />
        <Route path="/book-appointment/:clinicId/:doctorId" element={<PatientComfirmAppoinmtOnSpecificDoctors />} />
        <Route path="/patient/my-appointments" element={<PatientViewHisAppintment />} />
        <Route path="/patient/record" element={<PatientViewHisRecordpage />} />
        <Route path="/patient/Report" element={<PatientViewHisReportpage />} />
      </Routes>
    </>
  );
};

export default App;
