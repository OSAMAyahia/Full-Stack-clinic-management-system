import React, { useState } from 'react';
import { TextField, Button, FormControl, FormGroup, Grid, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { DoctorCreateReportAction } from './../../Backend/Redux.js/Actions/DoctorActions/DoctorAddReportAction';

export function PatientReportForm() {
  const [report, setReport] = useState({
    patientId: '',
    date: new Date().toISOString().split("T")[0], // صيغة التاريخ للتوافق مع نوع date
    diagnosis: '',
    tests: '',
    treatmentPlan: '',
    notes: ''
  });

  const dispatch = useDispatch();

  const handleChange = (field) => (e) => {
    setReport({ ...report, [field]: e.target.value });
  };

  const handleSubmit = async () => {
    // استخدام dispatch لإرسال التقرير للباكند
    await dispatch(DoctorCreateReportAction(report));

    // تفريغ الحقول بعد الإرسال
    setReport({
      patientId: '',
      date: new Date().toISOString().split("T")[0],
      diagnosis: '',
      tests: '',
      treatmentPlan: '',
      notes: ''
    });
  };

  return (
    <FormControl component="fieldset" fullWidth sx={{ padding: '30px' }}>
      <FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Patient ID"
              value={report.patientId}
              onChange={handleChange('patientId')}
              required
              fullWidth
            />
          </Grid>

          {/* Date Picker */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Appointment Date"
              type="date"
              fullWidth
              value={report.date}
              onChange={handleChange('date')}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: {
                  '& .MuiInputBase-input': {
                    color: 'text.primary',
                  },
                  '& .MuiSvgIcon-root': {
                    color: (theme) =>
                      theme.palette.mode === 'dark' ? theme.palette.primary.main : 'inherit',
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Diagnosis"
              value={report.diagnosis}
              onChange={handleChange('diagnosis')}
              required
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Tests"
              value={report.tests}
              onChange={handleChange('tests')}
              helperText="أضف أسماء الفحوصات المطلوبة"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Treatment Plan"
              value={report.treatmentPlan}
              onChange={handleChange('treatmentPlan')}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Notes"
              value={report.notes}
              onChange={handleChange('notes')}
              multiline
              rows={4}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Box textAlign="center">
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit Report
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormGroup>
    </FormControl>
  );
}
