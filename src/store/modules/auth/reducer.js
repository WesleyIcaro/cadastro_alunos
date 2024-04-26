import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function redu(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      console.log('REDUCER', action.payload);
      return state;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    default: {
      return state;
    }
  }
}
