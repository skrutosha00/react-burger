import {
  tokenFailed,
  tokenRequest,
  tokenSuccess
} from "services/actions/token";
import tokenReducer from "services/reducers/token";

describe("token reducer", () => {
  it("should return the initial state", () => {
    expect(tokenReducer(undefined, {})).toEqual({
      tokenRequest: false,
      tokenFailed: false
    });
  });

  it("should handle TOKEN_REQUEST", () => {
    expect(
      tokenReducer(
        {
          tokenRequest: false,
          tokenFailed: false
        },
        tokenRequest()
      )
    ).toEqual({
      tokenRequest: true,
      tokenFailed: false
    });
  });

  it("should handle TOKEN_SUCCESS", () => {
    expect(
      tokenReducer(
        {
          tokenFailed: false,
          tokenRequest: true
        },
        tokenSuccess()
      )
    ).toEqual({
      tokenRequest: false,
      tokenFailed: false
    });
  });

  it("should handle TOKEN_FAILED", () => {
    expect(
      tokenReducer(
        {
          tokenFailed: false,
          tokenRequest: true
        },
        tokenFailed()
      )
    ).toEqual({
      tokenRequest: false,
      tokenFailed: true
    });
  });
});
