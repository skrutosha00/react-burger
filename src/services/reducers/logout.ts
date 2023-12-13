import {
  LOGOUT_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  TLogoutFailedAction,
  TLogoutRequestAction,
  TLogoutSuccessAction
} from "services/actions/logout";

type TLogoutState = {
  logoutRequest: boolean;
  logoutFailed: boolean;
};

export type TLogoutAction =
  | TLogoutSuccessAction
  | TLogoutFailedAction
  | TLogoutRequestAction;

export const initialState: TLogoutState = {
  logoutRequest: false,
  logoutFailed: false
};

export default function logoutReducer(
  state = initialState,
  action: TLogoutAction
): TLogoutState {
  switch (action.type) {
    case LOGOUT_REQUEST: {
      return {
        logoutFailed: false,
        logoutRequest: true
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        logoutFailed: false,
        logoutRequest: false
      };
    }
    case LOGOUT_FAILED: {
      return {
        logoutFailed: true,
        logoutRequest: false
      };
    }
    default: {
      return state;
    }
  }
}
