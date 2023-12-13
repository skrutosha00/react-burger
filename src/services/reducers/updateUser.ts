import {
  TUpdateUserFailedAction,
  TUpdateUserRequestAction,
  TUpdateUserSuccessAction,
  UPDATE_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS
} from "services/actions/updateUser";

type TUpdateUserState = {
  updateUserRequest: boolean;
  updateUserFailed: boolean;
};

export type TUpdateUserAction =
  | TUpdateUserSuccessAction
  | TUpdateUserRequestAction
  | TUpdateUserFailedAction;

export const initialState: TUpdateUserState = {
  updateUserRequest: false,
  updateUserFailed: false
};

export default function updateUserReducer(
  state = initialState,
  action: TUpdateUserAction
): TUpdateUserState {
  switch (action.type) {
    case UPDATE_USER_REQUEST: {
      return {
        updateUserFailed: false,
        updateUserRequest: true
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        updateUserFailed: false,
        updateUserRequest: false
      };
    }
    case UPDATE_USER_FAILED: {
      return {
        updateUserFailed: true,
        updateUserRequest: false
      };
    }
    default: {
      return state;
    }
  }
}
