import {
  logoutFailed,
  logoutRequest,
  logoutSuccess
} from "services/actions/logout";
import logoutReducer from "services/reducers/logout";

describe("logout reducer", () => {
  it("should return the initial state", () => {
    expect(logoutReducer(undefined, {})).toEqual({
      logoutRequest: false,
      logoutFailed: false
    });
  });

  it("should handle LOGOUT_REQUEST", () => {
    expect(
      logoutReducer(
        {
          logoutRequest: false,
          logoutFailed: false
        },
        logoutRequest()
      )
    ).toEqual({
      logoutRequest: true,
      logoutFailed: false
    });
  });

  it("should handle LOGOUT_SUCCESS", () => {
    expect(
      logoutReducer(
        {
          logoutFailed: false,
          logoutRequest: true
        },
        logoutSuccess()
      )
    ).toEqual({
      logoutRequest: false,
      logoutFailed: false
    });
  });

  it("should handle LOGOUT_FAILED", () => {
    expect(
      logoutReducer(
        {
          logoutFailed: false,
          logoutRequest: true
        },
        logoutFailed()
      )
    ).toEqual({
      logoutRequest: false,
      logoutFailed: true
    });
  });
});
