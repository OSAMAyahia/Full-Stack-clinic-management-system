import { BaseUrl } from "../../../Axios"

export const FindAllDorsBySpecialtytIdAction=( id)=>async(dispatch)=>{
    try {

        // const token = localStorage.getItem('token');
        // const config={headers: {
        //     'Authorization': `Bearer ${token}`  
        //   }}      
        // console.log('Token',token)
   const data=await BaseUrl.get(`/api/v1/user/finddors/${id}`
   )

   dispatch({type:"GETALLDORSBYSPECIALITY", payload:data.data});
}
 catch (error) {
    console.error("Error from server: ", error.data?.data);
    dispatch({ type: 'GETALLDORSBYSPECIALITY', payload: error.data?.data });
  }
}


 