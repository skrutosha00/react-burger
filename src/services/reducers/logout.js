import { LOGOUT_FAILED, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "services/actions/logout";

const initialState = {
  logoutRequest: false,
  logoutFailed: false
};

export default function logoutReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_REQUEST: {
      return {
        logoutFailed: false,
        logoutRequest: true
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        logoutFailed: false,
        logoutRequest: false
      };
    }
    case LOGOUT_FAILED: {
      return {
        logoutFailed: true,
        logoutRequest: false
      };
    }
    default: {
      return state;
    }
  }
}
