import fetchJson from "utils/fetchJson";
import { USER_URL } from "services/globalVars";
import { AppDispatch, TAuthData } from "services/types/reduxTypes";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export type TGetUserRequestAction = {
  type: typeof GET_USER_REQUEST;
};

export type TGetUserSuccessAction = {
  type: typeof GET_USER_SUCCESS;
  authData: TAuthData;
};

export type TGetUserFailedAction = {
  type: typeof GET_USER_FAILED;
};

export function getUserRequest(): TGetUserRequestAction {
  return {
    type: GET_USER_REQUEST
  };
}

export function getUserSuccess(authData: TAuthData): TGetUserSuccessAction {
  return {
    type: GET_USER_SUCCESS,
    authData
  };
}

export function getUserFailed(): TGetUserFailedAction {
  return {
    type: GET_USER_FAILED
  };
}

export function getUser(token: string) {
  return async function (dispatch: AppDispatch) {
    dispatch(getUserRequest());
    try {
      const response = await fetchJson(USER_URL, {
        headers: {
          authorization: token
        }
      });
      dispatch(getUserSuccess(response));
    } catch (err) {
      dispatch(getUserFailed());
    }
  };
}
