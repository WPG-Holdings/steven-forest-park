import { combineReducers } from 'redux';
import userReducers from './user/reducer';
import authReducers from './auth/reducer';

export default combineReducers({
  user: userReducers,
  auth: authReducers,
});
