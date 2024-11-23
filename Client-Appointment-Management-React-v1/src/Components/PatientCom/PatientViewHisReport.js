import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Box, Divider, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { PatientViewHisReportsAction } from './../../Backend/Redux.js/Actions/DoctorActions/DoctorAddReportAction';
 
export default function PatientMedicalReportCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch=async()=>{

    await  dispatch(PatientViewHisReportsAction());
    }
    fetch();
  }, [dispatch]);

  const report = useSelector((state) => state.DoctorReportReducers?.applist?.data || []);
    return (
    <Box sx={{ padding: '2rem' }}>
      {report.map((report) => (
        <Card key={report._id} sx={{ maxWidth: '100%', margin: '20px auto', boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Medical Report
            </Typography>

            <Divider sx={{ marginBottom: '15px' }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="textSecondary">Report ID:</Typography>
                <Typography variant="body1">{report._id}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="textSecondary">Patient ID:</Typography>
                <Typography variant="body1">{report.patientId}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="textSecondary">Doctor ID:</Typography>
                <Typography variant="body1">{report.doctorId}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="textSecondary">Date:</Typography>
                <Typography variant="body1">{new Date(report.date).toLocaleDateString()}</Typography>
              </Grid>
            </Grid>

            <Divider sx={{ margin: '15px 0' }} />

            <Typography variant="body2" color="textSecondary">Diagnosis:</Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px' }}>{report.diagnosis}</Typography>

            <Typography variant="body2" color="textSecondary">Tests:</Typography>
            {report.tests && report.tests.length > 0 ? (
              report.tests.map((test, index) => (
                <Typography key={index} variant="body1" sx={{ marginBottom: '10px' }}>
                  - {test}
                </Typography>
              ))
            ) : (
              <Typography variant="body1" sx={{ marginBottom: '10px' }}>No tests available</Typography>
            )}

            <Typography variant="body2" color="textSecondary">Treatment Plan:</Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px' }}>{report.treatmentPlan}</Typography>

            <Typography variant="body2" color="textSecondary">Notes:</Typography>
            <Typography variant="body1">{report.notes}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
