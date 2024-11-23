import { BaseUrl } from "../../../Axios"

export const PatientRecordAction=( body)=>async(dispatch)=>{
    try {

        const token = localStorage.getItem('token');
        const config={headers: {
            'Authorization': `Bearer ${token}`  
          }}      
        console.log('Token',token)
   const data=await BaseUrl.post(`/api/v1/record/createrecord`,body ,config
   )

   dispatch({type:"PATIENTCREATERECORD", payload:data.data});
}
 catch (error) {
    console.error("Error from server: ", error.data?.data);
    dispatch({ type: 'PATIENTCREATERECORD', payload: error.data?.data });
  }
}


export const DoctorGetPatientRecordAction=()=>async(dispatch)=>{
    try {

        // const token = localStorage.getItem('token');
        // const config={headers: {
        //     'Authorization': `Bearer ${token}`  
        //   }}      
        // console.log('Token',token)
   const data=await BaseUrl.get(`/api/v1/record`)

   dispatch({type:"DOCTORGETALLERECORDS", payload:data.data});
}
 catch (error) {
    console.error("Error from server: ", error.data?.data);
    dispatch({ type: 'DOCTORGETALLERECORDS', payload: error.data?.data });
  }
}


export const GetOnePatientRecordAction=()=>async(dispatch)=>{
    try {

        const token = localStorage.getItem('token');
        const config={headers: {
            'Authorization': `Bearer ${token}`  
          }}      
        console.log('Token',token)
   const data=await BaseUrl.get(`/api/v1/record/getrecordbyid`,config)

   dispatch({type:"PATIENTGETONERECORDS", payload:data.data});
}
 catch (error) {
    console.error("Error from server: ", error.data?.data);
    dispatch({ type: 'PATIENTGETONERECORDS', payload: error.data?.data });
  }
}