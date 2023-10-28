import fetchJson from "utils/fetchJson";
import { LOGIN_URL } from "utils/globalVars";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export function loginSuccess(authData) {
  return {
    type: LOGIN_SUCCESS,
    authData
  };
}

export function loginFailed() {
  return {
    type: LOGIN_FAILED
  };
}

export function login(requestBody) {
  return async function (dispatch) {
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
