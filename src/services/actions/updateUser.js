import fetchJson from "utils/fetchJson";
import { USER_URL } from "services/globalVars";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export function updateUserRequest() {
  return {
    type: UPDATE_USER_REQUEST
  };
}

export function updateUserSuccess(authData) {
  return {
    type: UPDATE_USER_SUCCESS,
    authData
  };
}

export function updateUserFailed() {
  return {
    type: UPDATE_USER_FAILED
  };
}

export function updateUser(requestBody) {
  return async function (dispatch) {
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
