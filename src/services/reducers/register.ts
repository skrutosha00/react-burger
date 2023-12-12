import {
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  TRegisterFailedAction,
  TRegisterRequestAction,
  TRegisterSuccessAction
} from "services/actions/register";

type TRegisterState = {
  registerRequest: boolean;
  registerFailed: boolean;
};

export type TRegisterAction =
  | TRegisterSuccessAction
  | TRegisterFailedAction
  | TRegisterRequestAction;

const initialState: TRegisterState = {
  registerRequest: false,
  registerFailed: false
};

export default function registerReducer(
  state = initialState,
  action: TRegisterAction
): TRegisterState {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        registerFailed: false,
        registerRequest: true
      };
    }
    case REGISTER_SUCCESS: {
      return {
        registerFailed: false,
        registerRequest: false
      };
    }
    case REGISTER_FAILED: {
      return {
        registerFailed: true,
        registerRequest: false
      };
    }
    default: {
      return state;
    }
  }
}
