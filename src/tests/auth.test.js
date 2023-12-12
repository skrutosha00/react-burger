import { init } from "services/actions";
import { loginSuccess } from "services/actions/login";
import { logoutSuccess } from "services/actions/logout";
import { registerSuccess } from "services/actions/register";
import { tokenSuccess } from "services/actions/token";
import { updateUserSuccess } from "services/actions/updateUser";
import { getUserSuccess } from "services/actions/user";
import authReducer, { initialState } from "services/reducers/auth";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(authReducer(undefined, {})).toEqual({
      user: null,
      refreshToken: null,
      accessToken: null
    });
  });

  it("should handle INIT", () => {
    expect(authReducer(initialState, init())).toEqual({
      user: null,
      refreshToken: null,
      accessToken: null
    });
  });

  it("should handle LOGIN_SUCCESS", () => {
    expect(
      authReducer(
        initialState,
        loginSuccess({
          user: { name: "name", email: "123@123" },
          accessToken: "12345",
          refreshToken: "12345"
        })
      )
    ).toEqual({
      user: { name: "name", email: "123@123" },
      refreshToken: "12345",
      accessToken: "12345"
    });
  });

  it("should handle REGISTER_SUCCESS", () => {
    expect(
      authReducer(
        initialState,
        registerSuccess({
          user: { name: "name", email: "123@123" },
          accessToken: "12345",
          refreshToken: "12345"
        })
      )
    ).toEqual({
      user: { name: "name", email: "123@123" },
      refreshToken: "12345",
      accessToken: "12345"
    });
  });

  it("should handle GET_USER_SUCCESS", () => {
    expect(
      authReducer(
        initialState,
        getUserSuccess({
          user: { name: "name", email: "123@123" },
          accessToken: "12345",
          refreshToken: "12345"
        })
      )
    ).toEqual({
      user: { name: "name", email: "123@123" },
      refreshToken: "12345",
      accessToken: "12345"
    });
  });

  it("should handle LOGOUT_SUCCESS", () => {
    expect(
      authReducer(
        {
          user: { name: "name", email: "123@123" },
          accessToken: "12345",
          refreshToken: "12345"
        },
        logoutSuccess()
      )
    ).toEqual(initialState);
  });

  it("should handle TOKEN_SUCCESS", () => {
    expect(
      authReducer(
        {
          user: { name: "name", email: "123@123" },
          accessToken: "12345",
          refreshToken: "12345"
        },
        tokenSuccess({
          accessToken: "98765",
          refreshToken: "98765"
        })
      )
    ).toEqual({
      user: { name: "name", email: "123@123" },
      refreshToken: "98765",
      accessToken: "98765"
    });
  });

  it("should handle UPDATE_USER_SUCCESS", () => {
    expect(
      authReducer(
        {
          user: { name: "name", email: "123@123" },
          accessToken: "12345",
          refreshToken: "12345"
        },
        updateUserSuccess({
          user: {
            name: "newName",
            email: "newEmail"
          },
          refreshToken: "12345",
          accessToken: "12345"
        })
      )
    ).toEqual({
      user: { name: "newName", email: "newEmail" },
      refreshToken: "12345",
      accessToken: "12345"
    });
  });
});
