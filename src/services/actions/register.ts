import fetchJson from "utils/fetchJson";
import { REGISTER_URL } from "services/globalVars";
import { AppDispatch } from "services/types/reduxTypes";
import { TAuthData } from "services/types/reduxTypes";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export type TRegisterRequestAction = {
  type: typeof REGISTER_REQUEST;
};

export type TRegisterSuccessAction = {
  type: typeof REGISTER_SUCCESS;
  authData: TAuthData;
};

export type TRegisterFailedAction = {
  type: typeof REGISTER_FAILED;
};

export function registerRequest(): TRegisterRequestAction {
  return {
    type: REGISTER_REQUEST
  };
}

export function registerSuccess(authData: TAuthData): TRegisterSuccessAction {
  return {
    type: REGISTER_SUCCESS,
    authData
  };
}

export function registerFailed(): TRegisterFailedAction {
  return {
    type: REGISTER_FAILED
  };
}

export function register(requestBody: string) {
  return async function (dispatch: AppDispatch) {
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
