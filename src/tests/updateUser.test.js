import {
  updateUserFailed,
  updateUserRequest,
  updateUserSuccess
} from "services/actions/updateUser";
import updateUserReducer from "services/reducers/updateUser";

describe("updateUser reducer", () => {
  it("should return the initial state", () => {
    expect(updateUserReducer(undefined, {})).toEqual({
      updateUserRequest: false,
      updateUserFailed: false
    });
  });

  it("should handle UPDATE_USER_REQUEST", () => {
    expect(
      updateUserReducer(
        {
          updateUserRequest: false,
          updateUserFailed: false
        },
        updateUserRequest()
      )
    ).toEqual({
      updateUserRequest: true,
      updateUserFailed: false
    });
  });

  it("should handle UPDATE_USER_SUCCESS", () => {
    expect(
      updateUserReducer(
        {
          updateUserFailed: false,
          updateUserRequest: true
        },
        updateUserSuccess()
      )
    ).toEqual({
      updateUserRequest: false,
      updateUserFailed: false
    });
  });

  it("should handle UPDATE_USER_FAILED", () => {
    expect(
      updateUserReducer(
        {
          updateUserFailed: false,
          updateUserRequest: true
        },
        updateUserFailed()
      )
    ).toEqual({
      updateUserRequest: false,
      updateUserFailed: true
    });
  });
});
