import {
  registerFailed,
  registerRequest,
  registerSuccess
} from "services/actions/register";
import registerReducer, { initialState } from "services/reducers/register";

const requestState = {
  ...initialState,
  registerRequest: true
};

const failedState = {
  ...initialState,
  registerFailed: true
};

describe("register reducer", () => {
  it("should return the initial state", () => {
    expect(registerReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle REGISTER_REQUEST", () => {
    expect(registerReducer(initialState, registerRequest())).toEqual(
      requestState
    );
  });

  it("should handle REGISTER_SUCCESS", () => {
    expect(registerReducer(requestState, registerSuccess())).toEqual(
      initialState
    );
  });

  it("should handle REGISTER_FAILED", () => {
    expect(registerReducer(requestState, registerFailed())).toEqual(
      failedState
    );
  });
});
