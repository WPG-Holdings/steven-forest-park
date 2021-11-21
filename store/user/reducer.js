import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from './actionTypes';

const initialState = {
  userID: '',
  isRegistered: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        userID: action.payload.userID,
        isRegistered: true,
      };
    case REGISTER_USER_FAIL:
      return state;
    default:
      return state;
  }
};

export default reducers;
