import * as React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetOnePatientRecordAction } from './../../Backend/Redux.js/Actions/PatientAction/PatientRecordAction';

export default function PatientViewHisRecord() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.PatientRecordReducers.applist || []);
  let datarecord = [];

  if (selector && selector.data) {
    datarecord = selector.data;
  }

  React.useEffect(() => {
    const fetchData = async () => {
      await dispatch(GetOnePatientRecordAction());
    };
    fetchData();
  }, [dispatch]);

  return (
    <Box sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ marginBottom: '2rem' }}>
        Patient Records
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {datarecord.map((record) => (
          <Grid item xs={12} sm={6} md={4} key={record._id}>
            <Card sx={{ boxShadow: 3, borderRadius: '8px', padding: '1rem' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontSize: ' small' }}>
                  Patient ID: {record.patientId}
                </Typography>
                <Typography sx={{ margin: '0.5rem 0' }}>
                  <strong>Chronic Diseases:</strong> {record.chronicDiseases ? record.chronicDiseases.join(', ') : 'N/A'}
                </Typography>
                <Typography sx={{ margin: '0.5rem 0' }}>
                  <strong>Medications:</strong> {record.medications ? record.medications.join(', ') : 'N/A'}
                </Typography>
                <Typography sx={{ margin: '0.5rem 0' }}>
                  <strong>Allergies:</strong> {record.allergies ? record.allergies.join(', ') : 'N/A'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
