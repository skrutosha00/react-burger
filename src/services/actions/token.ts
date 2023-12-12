import fetchJson from "utils/fetchJson";
import { TOKEN_URL } from "services/globalVars";
import { AppDispatch } from "services/types/reduxTypes";
import { TTokens } from "services/types/reduxTypes";

export const TOKEN_REQUEST = "TOKEN_REQUEST";
export const TOKEN_SUCCESS = "TOKEN_SUCCESS";
export const TOKEN_FAILED = "TOKEN_FAILED";

export type TTokenRequestAction = {
  type: typeof TOKEN_REQUEST;
};

export type TTokenSuccessAction = {
  type: typeof TOKEN_SUCCESS;
  newTokens: TTokens;
};

export type TTokenFailedAction = {
  type: typeof TOKEN_FAILED;
};

export function tokenRequest(): TTokenRequestAction {
  return {
    type: TOKEN_REQUEST
  };
}

export function tokenSuccess(newTokens: TTokens): TTokenSuccessAction {
  return {
    type: TOKEN_SUCCESS,
    newTokens
  };
}

export function tokenFailed(): TTokenFailedAction {
  return {
    type: TOKEN_FAILED
  };
}

export function getToken(requestBody: string) {
  return async function (dispatch: AppDispatch) {
    dispatch(tokenRequest());
    try {
      const response = await fetchJson(TOKEN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: requestBody
      });
      dispatch(tokenSuccess(response));
    } catch (err) {
      console.log(err);
      dispatch(tokenFailed());
    }
  };
}
