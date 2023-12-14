import {
  TOKEN_FAILED,
  TOKEN_REQUEST,
  TOKEN_SUCCESS,
  TTokenFailedAction,
  TTokenRequestAction,
  TTokenSuccessAction
} from "services/actions/token";

type TTokenState = {
  tokenRequest: boolean;
  tokenFailed: boolean;
};

export type TTokenAction =
  | TTokenRequestAction
  | TTokenSuccessAction
  | TTokenFailedAction;

export const initialState = {
  tokenRequest: false,
  tokenFailed: false
};

export default function tokenReducer(
  state = initialState,
  action: TTokenAction
): TTokenState {
  switch (action.type) {
    case TOKEN_REQUEST: {
      return {
        tokenFailed: false,
        tokenRequest: true
      };
    }
    case TOKEN_SUCCESS: {
      return {
        tokenFailed: false,
        tokenRequest: false
      };
    }
    case TOKEN_FAILED: {
      return {
        tokenFailed: true,
        tokenRequest: false
      };
    }
    default: {
      return state;
    }
  }
}
