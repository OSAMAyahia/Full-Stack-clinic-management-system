import {combineReducers} from 'redux'
import { LoginReducer } from './Reducer/LoginReducer';
import { DoctorlistReducer } from './Reducer/DoctorReducer/DoctorGetAppointmentList';
import { DoctorApoointmetReducer } from './Reducer/DoctorReducer/DocAppointmentReducer';
import { PatientRecordReducer } from './Reducer/PatientReducer/PatientRecordReducer';
import { DoctorReportReducer } from './Reducer/DoctorReducer/DoctorReportReducer';
import { SpecialtyReducer } from './Reducer/SpecialtyReducer';
import { DorsBySpecialtytIdActionReducer } from './Reducer/PatientReducer/FindAllDorsBySpecialtytIdReducer';
import { PatientGetHisAppointment } from './Reducer/PatientReducer/PatientGetHisAppointment';

export const RootReducer=combineReducers(
    {AllpationRecorder: LoginReducer,
     DoctorGetListReducer:DoctorlistReducer, 
     DoctorApoointmetReducers:DoctorApoointmetReducer, 
     PatientRecordReducers:PatientRecordReducer,
     DoctorReportReducers:DoctorReportReducer,
     SpecialtyReducers:SpecialtyReducer,
     DorsBySpecialtytIdActionReducers:DorsBySpecialtytIdActionReducer,
     PatientGetHisAppointments:PatientGetHisAppointment
    }
)