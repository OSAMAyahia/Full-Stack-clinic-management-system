 
import { BaseUrl } from '../../Axios';
export const GetSpecialtyAction=( body)=>async(dispatch)=>{
    try {

        // const token = localStorage.getItem('token');
        // const config={headers: {
        //     'Authorization': `Bearer ${token}`  
        //   }}      
        // console.log('Token',token)
   const data=await BaseUrl.get(`/api/v1/specialty` )

   dispatch({type:"GETALLAPECIALTY", payload:data.data});
}
 catch (error) {
    console.error("Error from server: ", error.data?.data);
    dispatch({ type: 'GETALLAPECIALTY', payload: error.data?.data });
  }
}


// export const DoctorGetPatientRecordAction=()=>async(dispatch)=>{
//     try {

//         // const token = localStorage.getItem('token');
//         // const config={headers: {
//         //     'Authorization': `Bearer ${token}`  
//         //   }}      
//         // console.log('Token',token)
//    const data=await BaseUrl.get(`/api/v1/record`)

//    dispatch({type:"DOCTORGETALLERECORDS", payload:data.data});
// }
//  catch (error) {
//     console.error("Error from server: ", error.data?.data);
//     dispatch({ type: 'DOCTORGETALLERECORDS', payload: error.data?.data });
//   }
// }