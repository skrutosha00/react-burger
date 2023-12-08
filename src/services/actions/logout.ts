import fetchJson from "utils/fetchJson";
import { LOGOUT_URL } from "services/globalVars";
import { AppDispatch } from "services/types/reduxTypes";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export type TLogoutRequestAction = {
  type: typeof LOGOUT_REQUEST;
};

export type TLogoutSuccessAction = {
  type: typeof LOGOUT_SUCCESS;
};

export type TLogoutFailedAction = {
  type: typeof LOGOUT_FAILED;
};

export function logoutRequest(): TLogoutRequestAction {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function logoutSuccess(): TLogoutSuccessAction {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function logoutFailed(): TLogoutFailedAction {
  return {
    type: LOGOUT_FAILED,
  };
}

export function logout(requestBody: string) {
  return async function (dispatch: AppDispatch) {
    dispatch(logoutRequest());
    try {
      await fetchJson(LOGOUT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: requestBody,
      });
      dispatch(logoutSuccess());
    } catch (err) {
      dispatch(logoutFailed());
    }
  };
}
