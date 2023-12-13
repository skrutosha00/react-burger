import {
  logoutFailed,
  logoutRequest,
  logoutSuccess
} from "services/actions/logout";
import logoutReducer, { initialState } from "services/reducers/logout";

const requestState = {
  ...initialState,
  logoutRequest: true
};

const failedState = {
  ...initialState,
  logoutFailed: true
};

describe("logout reducer", () => {
  it("should return the initial state", () => {
    expect(logoutReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle LOGOUT_REQUEST", () => {
    expect(logoutReducer(initialState, logoutRequest())).toEqual(requestState);
  });

  it("should handle LOGOUT_SUCCESS", () => {
    expect(logoutReducer(requestState, logoutSuccess())).toEqual(initialState);
  });

  it("should handle LOGOUT_FAILED", () => {
    expect(logoutReducer(requestState, logoutFailed())).toEqual(failedState);
  });
});
