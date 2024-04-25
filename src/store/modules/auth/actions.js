import * as types from '../types';

export function loginRequest() {
  return ({
    type: types.LOGIN_REQUEST,
  });
}

export function loginSuccess() {
  return ({
    type: types.LOGIN_SUCCESS,
  });
}

export function loginFailure() {
  return ({
    type: types.LOGIN_FAILURE,
  });
}
