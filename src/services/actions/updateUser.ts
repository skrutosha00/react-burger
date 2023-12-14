import fetchJson from "utils/fetchJson";
import { USER_URL } from "services/globalVars";
import { AppDispatch } from "services/types/reduxTypes";
import { TAuthData } from "services/types/reduxTypes";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export type TUpdateUserRequestAction = {
  type: typeof UPDATE_USER_REQUEST;
};

export type TUpdateUserSuccessAction = {
  type: typeof UPDATE_USER_SUCCESS;
  authData: TAuthData;
};

export type TUpdateUserFailedAction = {
  type: typeof UPDATE_USER_FAILED;
};

export function updateUserRequest(): TUpdateUserRequestAction {
  return {
    type: UPDATE_USER_REQUEST
  };
}

export function updateUserSuccess(
  authData: TAuthData
): TUpdateUserSuccessAction {
  return {
    type: UPDATE_USER_SUCCESS,
    authData
  };
}

export function updateUserFailed(): TUpdateUserFailedAction {
  return {
    type: UPDATE_USER_FAILED
  };
}

export function updateUser(requestBody: string) {
  return async function (dispatch: AppDispatch) {
    dispatch(updateUserRequest());
    try {
      const response = await fetchJson(USER_URL, {
        method: "PATCH",
        headers: {
          authorization: localStorage.getItem("accessToken"),
          "Content-Type": "application/json;charset=utf-8"
        },
        body: requestBody
      });
      dispatch(updateUserSuccess(response));
    } catch (err) {
      dispatch(updateUserFailed());
    }
  };
}
