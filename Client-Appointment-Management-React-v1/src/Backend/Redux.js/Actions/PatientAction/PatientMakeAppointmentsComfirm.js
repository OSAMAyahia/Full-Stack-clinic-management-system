
import { BaseUrl } from './../../../Axios';

export const constPatientComfirmAppointment=(b )=>async(dispatch)=>{
    try {

        const token = localStorage.getItem('token');
        const config={headers: {
            'Authorization': `Bearer ${token}`  
          }}      
        console.log('Token',token)
   const data=await BaseUrl.post(`/api/v1/apointment/createappiontment` ,b,config
   )

   dispatch({type:"PATIENTCOMFIRMTPOINTMENT", payload:data.data});
}
 catch (error) {
    console.error("Error from server: ", error.data?.data);
    dispatch({ type: 'PATIENTCOMFIRMTPOINTMENT', payload: error.data?.data });
  }
}
export const PatientGetHisAppointmentAction=(  )=>async(dispatch)=>{
    try {

        const token = localStorage.getItem('token');
        const config={headers: {
            'Authorization': `Bearer ${token}`  
          }}      
        console.log('Token',token)
   const data=await BaseUrl.get(`/api/v1/apointment/getappiontment`,config
   )

   dispatch({type:"PATIENTGETHISAPOINTMENT", payload:data.data});
}
 catch (error) {
    console.error("Error from server: ", error.data?.data);
    dispatch({ type: 'PATIENTGETHISAPOINTMENT', payload: error.data?.data });
  }
}