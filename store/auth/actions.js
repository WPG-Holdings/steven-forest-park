import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  REGISTER_REQUEST,
  REGISTER_REQUEST_SUCCESS,
  REGISTER_REQUEST_FAIL,
} from './actionTypes';

export const loginRequest = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};

export const loginRequestSuccess = (payload) => {
  return {
    type: LOGIN_REQUEST_SUCCESS,
    payload,
  };
};

export const loginRequestFail = (payload) => {
  return {
    type: LOGIN_REQUEST_FAIL,
    payload,
  };
};

export const registerRequest = (payload) => {
  return {
    type: REGISTER_REQUEST,
    payload,
  };
};

export const registerRequestSuccess = (payload) => {
  return {
    type: REGISTER_REQUEST_SUCCESS,
    payload,
  };
};

export const registerRequestFail = () => {
  return {
    type: REGISTER_REQUEST_FAIL,
    payload,
  };
};
