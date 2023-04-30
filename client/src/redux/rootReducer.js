import { combineReducers } from 'redux'
import * as userReducer from './user/user.reducer';


//combine userReducer to rootReducer
export const rootReducer = combineReducers({
  [userReducer.userFeaturesKey] : userReducer.reducer
});