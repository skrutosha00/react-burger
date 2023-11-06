import fetchJson from "utils/fetchJson";
import { LOGOUT_URL } from "services/globalVars";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
  };
}

export function logoutSuccess(authData) {
  return {
    type: LOGOUT_SUCCESS,
    authData
  };
}

export function logoutFailed() {
  return {
    type: LOGOUT_FAILED
  };
}

export function logout(requestBody) {
  return async function (dispatch) {
    dispatch(logoutRequest());
    try {
      await fetchJson(LOGOUT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: requestBody
      });
      dispatch(logoutSuccess());
    } catch (err) {
      dispatch(logoutFailed());
    }
  };
}
