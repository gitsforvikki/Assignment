import Axios from 'axios';


export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';


export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';





//user reister
export const registerUser =(user , navigate)=>{
  return async(dispatch)=>{
    try{
        dispatch({type : REGISTER_USER_REQUEST});
        let dataUrl  = '/api/users/register';
        let response = await Axios.post(dataUrl ,  user);
        dispatch({type : REGISTER_USER_SUCCESS , payload :  response.data});
        navigate('/users/admit-card');

       
    }
    catch(error){
      console.log(error);
      dispatch({type : REGISTER_USER_FAILURE , payload : {error : error}});
      let errorList = error.response.data.errors;
      
    }
  }
};


//GET USER

export const getUser = (phoneId)=>{
  return async (dispatch)=>{
    try{
        dispatch({type : GET_USER_REQUEST});
        let dataUrl = `/api/users/${phoneId}`;
        let response = await Axios.get(dataUrl);
        dispatch({type : GET_USER_SUCCESS , payload : response.data});
    }
    catch(error){
      dispatch({type : GET_USER_FAILURE , payload : {errors : error}});
      console.log(error);
    }
  }
}