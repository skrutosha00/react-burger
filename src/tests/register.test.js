import {
  registerFailed,
  registerRequest,
  registerSuccess
} from "services/actions/register";
import registerReducer from "services/reducers/register";

describe("register reducer", () => {
  it("should return the initial state", () => {
    expect(registerReducer(undefined, {})).toEqual({
      registerRequest: false,
      registerFailed: false
    });
  });

  it("should handle REGISTER_REQUEST", () => {
    expect(
      registerReducer(
        {
          registerRequest: false,
          registerFailed: false
        },
        registerRequest()
      )
    ).toEqual({
      registerRequest: true,
      registerFailed: false
    });
  });

  it("should handle REGISTER_SUCCESS", () => {
    expect(
      registerReducer(
        {
          registerFailed: false,
          registerRequest: true
        },
        registerSuccess()
      )
    ).toEqual({
      registerRequest: false,
      registerFailed: false
    });
  });

  it("should handle REGISTER_FAILED", () => {
    expect(
      registerReducer(
        {
          registerFailed: false,
          registerRequest: true
        },
        registerFailed()
      )
    ).toEqual({
      registerRequest: false,
      registerFailed: true
    });
  });
});
