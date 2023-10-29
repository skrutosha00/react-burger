import { GET_USER_FAILED, GET_USER_REQUEST, GET_USER_SUCCESS } from "services/actions/user";

const initialState = {
  getUserRequest: false,
  getUserFailed: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return {
        getUserFailed: false,
        getUserRequest: true
      };
    }
    case GET_USER_SUCCESS: {
      return {
        getUserFailed: false,
        getUserRequest: false
      };
    }
    case GET_USER_FAILED: {
      return {
        getUserFailed: true,
        getUserRequest: false
      };
    }
    default: {
      return state;
    }
  }
}
