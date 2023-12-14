import fetchJson from "utils/fetchJson";
import { LOGIN_URL } from "services/globalVars";
import { AppDispatch } from "services/types/reduxTypes";
import { TAuthData } from "services/types/reduxTypes";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export type TLoginRequestAction = {
  type: typeof LOGIN_REQUEST;
};

export type TLoginSuccessAction = {
  type: typeof LOGIN_SUCCESS;
  authData: TAuthData;
};

export type TLoginFailedAction = {
  type: typeof LOGIN_FAILED;
};

export function loginRequest(): TLoginRequestAction {
  return {
    type: LOGIN_REQUEST
  };
}

export function loginSuccess(authData: TAuthData): TLoginSuccessAction {
  return {
    type: LOGIN_SUCCESS,
    authData
  };
}

export function loginFailed(): TLoginFailedAction {
  return {
    type: LOGIN_FAILED
  };
}

export function login(requestBody: string) {
  return async function (dispatch: AppDispatch) {
    dispatch(loginRequest());
    try {
      const response = await fetchJson(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: requestBody
      });
      dispatch(loginSuccess(response));
    } catch (err) {
      dispatch(loginFailed());
    }
  };
}
