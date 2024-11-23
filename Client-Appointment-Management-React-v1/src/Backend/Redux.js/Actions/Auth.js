 
import { type } from '@testing-library/user-event/dist/type';
import { BaseUrl } from './../../Axios';



export const createuser = (datas) => async (dispatch) => {
    try {
      const response = await BaseUrl.post('/api/v1/user/signup', datas);
       dispatch({ type: 'CREATE_USER', payload: response.data });
    } catch (error) {
      console.error("Error from server: ", error.response?.data);
      dispatch({ type: 'CREATE_USER', payload: error.response?.data });
    }
  };


export const login=(data)=>async (dispatch)=>{
  try{
    const datas=await BaseUrl.post('/api/v1/user/login',data)
    dispatch({type: 'LOGINUSER', data: datas.data})

  }catch(err){
    console.error("Error from server: ", err);

  }

}  