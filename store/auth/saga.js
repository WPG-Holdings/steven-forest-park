import { all, call, put, take, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, REGISTER_REQUEST } from './actionTypes';
import {
  loginRequestSuccess,
  loginRequestFail,
  registerRequestFail,
} from './actions';
import api from '@/api';

export function* loginSaga(payload) {
  const { userAccount, userPassword } = payload.payload;
  try {
    const response = yield api.accounts.login(userAccount, userPassword);
    const userData = { userAccount, userPassword };
    if (response.status === 'Y') {
      yield put(loginRequestSuccess(userData));
    }
    if (response.status === 'N') {
      yield put(loginRequestFail({ failMessage: response.errorMessage }));
    }
  } catch (error) {
    yield put(loginRequestFail({ failMessage: 'CONNECTION_FAIL' }));
  }
}

export function* registerSaga(payload) {
  const { userAccount, userPassword } = payload;
  try {
    const response = yield api.accounts.register(userAccount, userPassword);
  } catch (error) {
    yield put(registerRequestFail({ failMessage: 'CONNECTION_FAIL' }));
  }
}

export default [
  takeLatest(LOGIN_REQUEST, loginSaga),
  takeLatest(REGISTER_REQUEST, registerSaga),
];
