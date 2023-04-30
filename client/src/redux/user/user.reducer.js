import *  as userActions from './user.action';


export const userFeaturesKey =  "userInfo";

let initialState = {
  user:{},
  errorMessage:''
};



export const reducer = (state = initialState , actions)=>{

  let {type ,  payload} = actions;

  switch (type) {
    //register user
    case userActions.REGISTER_USER_REQUEST:
      return{
        ...state,
      };
    case userActions.REGISTER_USER_SUCCESS:
      return{
        ...state,
        errorMessage : ''
      };
    case userActions.REGISTER_USER_FAILURE:
      return{
        ...state,
        errorMessage:payload.error
      };

      //get user
      case userActions.GET_USER_REQUEST:
        return{
          ...state,
        };
      case userActions.GET_USER_SUCCESS:
        return{
          ...state,
          user : payload.user,
          errorMessage:''

        };
      case userActions.GET_USER_FAILURE:
        return{
          ...state,
          user :{},
          errorMessage:payload.errors
        };
       
    default : return state;
  }

};