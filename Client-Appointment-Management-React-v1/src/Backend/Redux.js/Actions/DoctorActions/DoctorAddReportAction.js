import { BaseUrl } from "../../../Axios"

export const DoctorCreateReportAction=( body)=>async(dispatch)=>{
    try {

        const token = localStorage.getItem('token');
        const config={headers: {
            'Authorization': `Bearer ${token}`  
          }}      
        console.log('Token',token)
   const data=await BaseUrl.post('/api/v1/report/createreport',body ,config
   )

   dispatch({type:"DOCTORCREATEREPORT", payload:data.data});
}
 catch (error) {
    console.error("Error from server: ", error.data?.data);
    dispatch({ type: 'DOCTORCREATEREPORT', payload: error.data?.data });
  }
}


export const DoctorViewAllReportsAction=( )=>async(dispatch)=>{
    try {
 
   const data=await BaseUrl.get(`/api/v1/report/` )

   dispatch({type:"DOCTORVIEWALLREPORT", payload:data.data});
}
 catch (error) {
    console.error("Error from server: ", error.data?.data);
    dispatch({ type: 'DOCTORVIEWALLREPORT', payload: error.data?.data });
  }
}
export const PatientViewHisReportsAction=( )=>async(dispatch)=>{
    try {
      const token = localStorage.getItem('token');
      const config={headers: {
          'Authorization': `Bearer ${token}`  
        }}      
      console.log('Token',token)
   const data=await BaseUrl.get(`/api/v1/report/getreportbyid`,config )

   dispatch({type:"PATIENTVIEWHISREPORT", payload:data.data});
}
 catch (error) {
    console.error("Error from server: ", error.data?.data);
    dispatch({ type: 'PATIENTVIEWHISREPORT', payload: error.data?.data });
  }
}