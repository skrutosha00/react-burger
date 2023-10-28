import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "services/actions/login";

const initialState = {
  loginRequest: false,
  loginFailed: false
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        loginFailed: false,
        loginRequest: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        loginFailed: false,
        loginRequest: false
      };
    }
    case LOGIN_FAILED: {
      return {
        loginFailed: true,
        loginRequest: false
      };
    }
    default: {
      return state;
    }
  }
}
