import React from 'react';
import { Box, Avatar, Typography, Paper, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

export default function Profilecompoenets() {
  const drawerWidth = 250;
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Box width={`calc(100% - ${drawerWidth}px)`} sx={{ ml: "250px", display: "flex", justifyContent: 'center', paddingTop: '20px' }}>
      <Paper
        sx={{
          padding: '2rem',
          width: '98%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '8px',
          boxShadow: 3,
        }}
      >
        {/* صورة البروفايل */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar
            alt="User Avatar"
            src="https://th.bing.com/th/id/R.1cfd276cdb6101d005212f6b17d21e10?rik=r4U%2be5jZ9XsW9Q&pid=ImgRaw&r=0" // ضع رابط صورة الأفاتار هنا
            sx={{ width: 150, height: 150, marginBottom: '20px' }}
          />
        </motion.div>

        {/* اسم المستخدم */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {user.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ marginBottom: '20px' }}>
            {user.role}
          </Typography>
        </motion.div>

        {/* تفاصيل أخرى */}
        <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
          <Grid item xs={12} sm={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography variant="body2">البريد الإلكتروني:</Typography>
              <Typography variant="body1">{user.email}</Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="body2">رقم الهاتف:</Typography>
              <Typography variant="body1">+201234567890</Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <Typography variant="body2">الموقع:</Typography>
              <Typography variant="body1">القاهرة، مصر</Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* زر تعديل البروفايل */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ width: '100%' }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '100%', padding: '10px', fontWeight: 'bold' }}
          >
            تعديل البيانات
          </Button>
        </motion.div>
      </Paper>
    </Box>
  );
}
