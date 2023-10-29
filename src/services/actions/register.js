import fetchJson from "utils/fetchJson";
import { REGISTER_URL } from "utils/globalVars";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export function registerRequest() {
  return {
    type: REGISTER_REQUEST
  };
}

export function registerSuccess(authData) {
  return {
    type: REGISTER_SUCCESS,
    authData
  };
}

export function registerFailed() {
  return {
    type: REGISTER_FAILED
  };
}

export function register(requestBody) {
  return async function (dispatch) {
    dispatch(registerRequest());
    try {
      const response = await fetchJson(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: requestBody
      });
      dispatch(registerSuccess(response));
    } catch (err) {
      dispatch(registerFailed());
    }
  };
}
