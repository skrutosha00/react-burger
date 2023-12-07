import fetchJson from "utils/fetchJson";
import { ORDER_URL } from "services/globalVars";
import { clearConstructorIngredients } from "services/actions/constructorIngredients";
import { AppDispatch } from "services/types/reduxTypes";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export type TGetOrderRequestAction = {
  type: typeof GET_ORDER_REQUEST;
};

export type TGetOrderSuccessAction = {
  type: typeof GET_ORDER_SUCCESS;
  number: number;
};

export type TGetOrderFailedAction = {
  type: typeof GET_ORDER_FAILED;
};

export function getOrderRequest(): TGetOrderRequestAction {
  return {
    type: GET_ORDER_REQUEST,
  };
}

export function getOrderSuccess(number: number): TGetOrderSuccessAction {
  return {
    type: GET_ORDER_SUCCESS,
    number,
  };
}

export function getOrderFailed(): TGetOrderFailedAction {
  return {
    type: GET_ORDER_FAILED,
  };
}

export function getOrder(requestBody: string) {
  return async function (dispatch: AppDispatch) {
    dispatch(getOrderRequest());
    try {
      const response = await fetchJson(ORDER_URL, {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("accessToken"),
          "Content-Type": "application/json;charset=utf-8",
        },
        body: requestBody,
      });
      dispatch(getOrderSuccess(response.order.number));
      dispatch(clearConstructorIngredients());
    } catch (err) {
      dispatch(getOrderFailed());
    }
  };
}
