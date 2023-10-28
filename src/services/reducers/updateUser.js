import { UPDATE_USER_FAILED, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "services/actions/updateUser";

const initialState = {
  updateUserRequest: false,
  updateUserFailed: false
};

export default function updateUserReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_REQUEST: {
      return {
        updateUserFailed: false,
        updateUserRequest: true
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        updateUserFailed: false,
        updateUserRequest: false
      };
    }
    case UPDATE_USER_FAILED: {
      return {
        updateUserFailed: true,
        updateUserRequest: false
      };
    }
    default: {
      return state;
    }
  }
}
