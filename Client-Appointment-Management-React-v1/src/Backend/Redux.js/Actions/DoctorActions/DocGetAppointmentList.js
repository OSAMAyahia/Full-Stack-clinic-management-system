import { type } from "@testing-library/user-event/dist/type"
import { BaseUrl } from "../../../Axios"

export const DoctorGetAppointmentList=(id)=>async(dispatch)=>{
    try {

   const data=await BaseUrl.get(`/api/v1/docaccpappo/getdocaccesspatientappo/${id}`)

   dispatch({type:"DOCTORGETAPPLISR", payload:data.data});
} catch (error) {
    console.error("Error from server: ", error.data?.data);
    dispatch({ type: 'DOCTORGETAPPLISR', payload: error.data?.data });
  }
}