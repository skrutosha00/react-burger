import {
  loginFailed,
  loginRequest,
  loginSuccess
} from "services/actions/login";
import loginReducer, { initialState } from "services/reducers/login";

const requestState = {
  ...initialState,
  loginRequest: true
};

const failedState = {
  ...initialState,
  loginFailed: true
};

describe("login reducer", () => {
  it("should return the initial state", () => {
    expect(loginReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle LOGIN_REQUEST", () => {
    expect(loginReducer(initialState, loginRequest())).toEqual(requestState);
  });

  it("should handle LOGIN_SUCCESS", () => {
    expect(loginReducer(requestState, loginSuccess())).toEqual(initialState);
  });

  it("should handle LOGIN_FAILED", () => {
    expect(loginReducer(requestState, loginFailed())).toEqual(failedState);
  });
});
