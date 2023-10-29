import fetchJson from "utils/fetchJson";
import { USER_URL } from "utils/globalVars";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export function getUserRequest() {
  return {
    type: GET_USER_REQUEST
  };
}

export function getUserSuccess(authData) {
  return {
    type: GET_USER_SUCCESS,
    authData
  };
}

export function getUserFailed(error) {
  return {
    type: GET_USER_FAILED,
    error
  };
}

export function getUser(token) {
  return async function (dispatch) {
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
