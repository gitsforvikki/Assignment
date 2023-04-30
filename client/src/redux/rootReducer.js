import { combineReducers } from 'redux'
import * as userReducer from './user/user.reducer';

export const rootReducer = combineReducers({
  [userReducer.userFeaturesKey] : userReducer.reducer
});