import { takeLatest } from 'redux-saga/effects';
import { REGISTER_USER } from './actionTypes';

export function* setRegisterUserSaga() {
  return;
}
export default [takeLatest(REGISTER_USER, setRegisterUserSaga)];
