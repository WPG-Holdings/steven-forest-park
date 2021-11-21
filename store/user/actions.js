import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from './actionTypes';

export const registerUser = () => ({
  type: REGISTER_USER,
});

export const registerUserSuccess = (payload) => ({
  type: REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserFail = () => ({
  type: REGISTER_USER_FAIL,
});
