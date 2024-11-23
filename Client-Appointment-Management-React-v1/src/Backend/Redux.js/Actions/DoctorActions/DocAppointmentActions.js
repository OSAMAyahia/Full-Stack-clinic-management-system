 import { BaseUrl } from "../../../Axios"

export const DoctorAddAppointmentList=( body)=>async(dispatch)=>{
    try {

        const token = localStorage.getItem('token');
        const config={headers: {
            'Authorization': `Bearer ${token}`  
          }}      
        console.log('Token',token)
   const data=await BaseUrl.post(`/api/v1/doctorappointment/createdoctorappointment`,body ,config
   )

   dispatch({type:"DOCTORADDAPOINTMENT", payload:data.data});
}
 catch (error) {
    console.error("Error from server: ", error.data?.data);
    dispatch({ type: 'DOCTORADDAPOINTMENT', payload: error.data?.data });
  }
}


export const DoctorGetAppointment=( id)=>async(dispatch)=>{
    try {

        // const token = localStorage.getItem('token');
        // const config={headers: {
        //     'Authorization': `Bearer ${token}`  
        //   }}      
        // console.log('Token',token)
   const data=await BaseUrl.get(`/api/v1/doctorappointment/getdoctorappointmentbyid/${id}` 
   )

   dispatch({type:"DOCTORGETPOINTMENT", payload:data.data});
}
 catch (error) {
    console.error("Error from server: ", error.data?.data);
    dispatch({ type: 'DOCTORGETPOINTMENT', payload: error.data?.data });
  }
}