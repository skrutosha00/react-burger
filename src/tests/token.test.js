import {
  tokenFailed,
  tokenRequest,
  tokenSuccess
} from "services/actions/token";
import tokenReducer, { initialState } from "services/reducers/token";

const requestState = {
  ...initialState,
  tokenRequest: true
};

const failedState = {
  ...initialState,
  tokenFailed: true
};

describe("token reducer", () => {
  it("should return the initial state", () => {
    expect(tokenReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle TOKEN_REQUEST", () => {
    expect(tokenReducer(initialState, tokenRequest())).toEqual(requestState);
  });

  it("should handle TOKEN_SUCCESS", () => {
    expect(tokenReducer(requestState, tokenSuccess())).toEqual(initialState);
  });

  it("should handle TOKEN_FAILED", () => {
    expect(tokenReducer(requestState, tokenFailed())).toEqual(failedState);
  });
});
