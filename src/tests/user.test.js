import {
  getUserFailed,
  getUserRequest,
  getUserSuccess
} from "services/actions/user";
import userReducer from "services/reducers/user";

describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual({
      getUserRequest: false,
      getUserFailed: false
    });
  });

  it("should handle GET_USER_REQUEST", () => {
    expect(
      userReducer(
        {
          getUserRequest: false,
          getUserFailed: false
        },
        getUserRequest()
      )
    ).toEqual({
      getUserRequest: true,
      getUserFailed: false
    });
  });

  it("should handle GET_USER_SUCCESS", () => {
    expect(
      userReducer(
        {
          getUserFailed: false,
          getUserRequest: true
        },
        getUserSuccess()
      )
    ).toEqual({
      getUserRequest: false,
      getUserFailed: false
    });
  });

  it("should handle GET_USER_FAILED", () => {
    expect(
      userReducer(
        {
          getUserFailed: false,
          getUserRequest: true
        },
        getUserFailed()
      )
    ).toEqual({
      getUserRequest: false,
      getUserFailed: true
    });
  });
});
