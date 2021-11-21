import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  REGISTER_REQUEST,
  REGISTER_REQUEST_SUCCESS,
  REGISTER_REQUEST_FAIL,
} from './actionTypes';

const initialState = {
  loginStatus: '',
  token: '',
  failMessage: '',
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginStatus: '',
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        userAccount: action.payload.userAccount,
        userPassword: action.payload.userPassword,
        loginStatus: 'PASS',
      };
    case LOGIN_REQUEST_FAIL:
      return {
        ...state,
        loginStatus: action.payload.failMessage,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
      };
    case REGISTER_REQUEST_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case REGISTER_REQUEST_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducers;
