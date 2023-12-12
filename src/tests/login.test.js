import {
  loginFailed,
  loginRequest,
  loginSuccess
} from "services/actions/login";
import loginReducer from "services/reducers/login";

describe("login reducer", () => {
  it("should return the initial state", () => {
    expect(loginReducer(undefined, {})).toEqual({
      loginRequest: false,
      loginFailed: false
    });
  });

  it("should handle LOGIN_REQUEST", () => {
    expect(
      loginReducer(
        {
          loginRequest: false,
          loginFailed: false
        },
        loginRequest()
      )
    ).toEqual({
      loginRequest: true,
      loginFailed: false
    });
  });

  it("should handle LOGIN_SUCCESS", () => {
    expect(
      loginReducer(
        {
          loginFailed: false,
          loginRequest: true
        },
        loginSuccess()
      )
    ).toEqual({
      loginRequest: false,
      loginFailed: false
    });
  });

  it("should handle LOGIN_FAILED", () => {
    expect(
      loginReducer(
        {
          loginFailed: false,
          loginRequest: true
        },
        loginFailed()
      )
    ).toEqual({
      loginRequest: false,
      loginFailed: true
    });
  });
});
