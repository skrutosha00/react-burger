import { INIT } from "services/actions";
import { LOGIN_SUCCESS } from "services/actions/login";
import { LOGOUT_SUCCESS } from "services/actions/logout";
import { REGISTER_SUCCESS } from "services/actions/register";
import { TOKEN_SUCCESS } from "services/actions/token";
import { UPDATE_USER_SUCCESS } from "services/actions/updateUser";
import { GET_USER_SUCCESS } from "services/actions/user";

const initialState = {
  accessToken: null,
  refreshToken: null,
  user: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case INIT: {
      return {
        ...state,
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken")
      };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("accessToken", action.authData.accessToken);
      localStorage.setItem("refreshToken", action.authData.refreshToken);

      return {
        ...state,
        ...action.authData
      };
    }
    case REGISTER_SUCCESS: {
      localStorage.setItem("accessToken", action.authData.accessToken);
      localStorage.setItem("refreshToken", action.authData.refreshToken);

      return {
        ...state,
        ...action.authData
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.authData.user,
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken")
      };
    }
    case LOGOUT_SUCCESS: {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      return initialState;
    }
    case TOKEN_SUCCESS: {
      localStorage.setItem("accessToken", action.newTokens.accessToken);
      localStorage.setItem("refreshToken", action.newTokens.refreshToken);

      return {
        ...state,
        ...action.newTokens
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.authData.user
      };
    }
    default: {
      return state;
    }
  }
}
