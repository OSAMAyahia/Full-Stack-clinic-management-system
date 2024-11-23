import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { DoctorGetPatientRecordAction } from '../../Backend/Redux.js/Actions/PatientAction/PatientRecordAction';

export default function PatientRecordsTable() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.PatientRecordReducers.applist);
  let datarecord = [];

  if (selector && selector.data) {
    datarecord = selector.data;
  }

  React.useEffect(() => {
    const fetchData = async () => {
      await dispatch(DoctorGetPatientRecordAction());
    };
    fetchData();
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="patient records table">
        <TableHead>
          <TableRow>
            <TableCell>Patient ID</TableCell>
            <TableCell align="right">Chronic Diseases</TableCell>
            <TableCell align="right">Medications</TableCell>
            <TableCell align="right">Allergies</TableCell>
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
              <TableCell align="right">
                {record.chronicDiseases ? record.chronicDiseases.join(', ') : 'N/A'}
              </TableCell>
              <TableCell align="right">
                {record.medications ? record.medications.join(', ') : 'N/A'}
              </TableCell>
              <TableCell align="right">
                {record.allergies ? record.allergies.join(', ') : 'N/A'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
  );
}
