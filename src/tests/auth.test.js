import { init } from "services/actions";
import { loginSuccess } from "services/actions/login";
import { logoutSuccess } from "services/actions/logout";
import { registerSuccess } from "services/actions/register";
import { tokenSuccess } from "services/actions/token";
import { updateUserSuccess } from "services/actions/updateUser";
import { getUserSuccess } from "services/actions/user";
import authReducer, { initialState } from "services/reducers/auth";

const testUser = {
  user: { name: "name", email: "123@123" },
  accessToken: "12345",
  refreshToken: "12345"
};

const testNewTokens = {
  refreshToken: "98765",
  accessToken: "98765"
};

const testNewUser = {
  name: "newName",
  email: "newEmail"
};

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle INIT", () => {
    expect(authReducer(initialState, init())).toEqual(initialState);
  });

  it("should handle LOGIN_SUCCESS", () => {
    expect(authReducer(initialState, loginSuccess(testUser))).toEqual(testUser);
  });

  it("should handle REGISTER_SUCCESS", () => {
    expect(authReducer(initialState, registerSuccess(testUser))).toEqual(
      testUser
    );
  });

  it("should handle GET_USER_SUCCESS", () => {
    expect(authReducer(initialState, getUserSuccess(testUser))).toEqual(
      testUser
    );
  });

  it("should handle LOGOUT_SUCCESS", () => {
    expect(authReducer(testUser, logoutSuccess())).toEqual(initialState);
  });

  it("should handle TOKEN_SUCCESS", () => {
    expect(authReducer(testUser, tokenSuccess(testNewTokens))).toEqual({
      ...testUser,
      ...testNewTokens
    });
  });

  it("should handle UPDATE_USER_SUCCESS", () => {
    expect(
      authReducer(
        testUser,
        updateUserSuccess({
          ...testUser,
          user: testNewUser
        })
      )
    ).toEqual({
      ...testUser,
      user: testNewUser
    });
  });
});
