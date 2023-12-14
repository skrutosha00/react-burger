import {
  getUserFailed,
  getUserRequest,
  getUserSuccess
} from "services/actions/user";
import userReducer, { initialState } from "services/reducers/user";

const requestState = {
  ...initialState,
  getUserRequest: true
};

const failedState = {
  ...initialState,
  getUserFailed: true
};

describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_USER_REQUEST", () => {
    expect(userReducer(initialState, getUserRequest())).toEqual(requestState);
  });

  it("should handle GET_USER_SUCCESS", () => {
    expect(userReducer(requestState, getUserSuccess())).toEqual(initialState);
  });

  it("should handle GET_USER_FAILED", () => {
    expect(userReducer(requestState, getUserFailed())).toEqual(failedState);
  });
});
