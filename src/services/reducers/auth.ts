import { INIT, TInitAction } from "services/actions";
import { LOGIN_SUCCESS, TLoginSuccessAction } from "services/actions/login";
import { LOGOUT_SUCCESS, TLogoutSuccessAction } from "services/actions/logout";
import {
  REGISTER_SUCCESS,
  TRegisterSuccessAction
} from "services/actions/register";
import { TOKEN_SUCCESS, TTokenSuccessAction } from "services/actions/token";
import {
  TUpdateUserSuccessAction,
  UPDATE_USER_SUCCESS
} from "services/actions/updateUser";
import { GET_USER_SUCCESS, TGetUserSuccessAction } from "services/actions/user";
import { TUser } from "services/types/reduxTypes";

type TAuthState = {
  user: TUser | null;
  refreshToken: string | null;
  accessToken: string | null;
};

export type TAuthAction =
  | TInitAction
  | TLoginSuccessAction
  | TRegisterSuccessAction
  | TUpdateUserSuccessAction
  | TLogoutSuccessAction
  | TGetUserSuccessAction
  | TTokenSuccessAction;

export const initialState: TAuthState = {
  user: null,
  refreshToken: null,
  accessToken: null
};

export default function authReducer(
  state = initialState,
  action: TAuthAction
): TAuthState {
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
