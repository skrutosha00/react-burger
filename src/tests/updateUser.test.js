import {
  updateUserFailed,
  updateUserRequest,
  updateUserSuccess
} from "services/actions/updateUser";
import updateUserReducer, { initialState } from "services/reducers/updateUser";

const requestState = {
  ...initialState,
  updateUserRequest: true
};

const failedState = {
  ...initialState,
  updateUserFailed: true
};

describe("updateUser reducer", () => {
  it("should return the initial state", () => {
    expect(updateUserReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle UPDATE_USER_REQUEST", () => {
    expect(updateUserReducer(initialState, updateUserRequest())).toEqual(
      requestState
    );
  });

  it("should handle UPDATE_USER_SUCCESS", () => {
    expect(updateUserReducer(requestState, updateUserSuccess())).toEqual(
      initialState
    );
  });

  it("should handle UPDATE_USER_FAILED", () => {
    expect(updateUserReducer(requestState, updateUserFailed())).toEqual(
      failedState
    );
  });
});
