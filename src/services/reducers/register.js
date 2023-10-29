import { REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from "services/actions/register";

const initialState = {
  registerRequest: false,
  registerFailed: false
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        registerFailed: false,
        registerRequest: true
      };
    }
    case REGISTER_SUCCESS: {
      return {
        registerFailed: false,
        registerRequest: false
      };
    }
    case REGISTER_FAILED: {
      return {
        registerFailed: true,
        registerRequest: false
      };
    }
    default: {
      return state;
    }
  }
}
