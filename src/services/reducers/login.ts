import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  TLoginFailedAction,
  TLoginRequestAction,
  TLoginSuccessAction
} from "services/actions/login";

type TLoginState = {
  loginRequest: boolean;
  loginFailed: boolean;
};

export type TLoginAction =
  | TLoginRequestAction
  | TLoginSuccessAction
  | TLoginFailedAction;

const initialState: TLoginState = {
  loginRequest: false,
  loginFailed: false
};

export default function loginReducer(
  state = initialState,
  action: TLoginAction
): TLoginState {
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
