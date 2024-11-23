import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { DoctorViewAllReportsAction } from '../../Backend/Redux.js/Actions/DoctorActions/DoctorAddReportAction';

export default function PatientRecordsTable() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.DoctorReportReducers.applist);
  let datarecord = [];

  if (selector && selector.data) {
    datarecord = selector.data;
  }
  
  React.useEffect(() => {
    const fetchData = async () => {
      await dispatch(DoctorViewAllReportsAction());
    };
    fetchData();
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="patient records table">
        <TableHead>
          <TableRow>
            <TableCell>Patient ID</TableCell>
            <TableCell align="right">Doctor ID</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Diagnosis</TableCell>
            <TableCell align="right">Tests</TableCell>
            <TableCell align="right">Treatment Plan</TableCell>
            <TableCell align="right">Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datarecord.map((record) => (
            <TableRow
              key={record._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {record.patientId}
              </TableCell>
              <TableCell align="right">{record.doctorId}</TableCell>
              <TableCell align="right">{new Date(record.date).toLocaleDateString()}</TableCell>
              <TableCell align="right">{record.diagnosis}</TableCell>
              <TableCell align="right">{record.tests.join(', ')}</TableCell>
              <TableCell align="right">{record.treatmentPlan}</TableCell>
              <TableCell align="right">{record.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
