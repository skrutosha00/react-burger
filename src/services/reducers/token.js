import { TOKEN_FAILED, TOKEN_REQUEST, TOKEN_SUCCESS } from "services/actions/token";

const initialState = {
  tokenRequest: false,
  tokenFailed: false
};

export default function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case TOKEN_REQUEST: {
      return {
        tokenFailed: false,
        tokenRequest: true
      };
    }
    case TOKEN_SUCCESS: {
      return {
        tokenFailed: false,
        tokenRequest: false
      };
    }
    case TOKEN_FAILED: {
      return {
        tokenFailed: true,
        tokenRequest: false
      };
    }
    default: {
      return state;
    }
  }
}
