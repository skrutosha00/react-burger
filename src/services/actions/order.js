import fetchJson from "utils/fetchJson";
import { ORDER_URL } from "utils/globalVars";
import { clearConstructorIngredients } from "services/actions/constructorIngredients";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export function getOrderRequest() {
  return {
    type: GET_ORDER_REQUEST
  };
}

export function getOrderSuccess(number) {
  return {
    type: GET_ORDER_SUCCESS,
    number
  };
}

export function getOrderFailed() {
  return {
    type: GET_ORDER_FAILED
  };
}

export function getOrder(requestBody) {
  return async function (dispatch) {
    dispatch(getOrderRequest());
    try {
      const response = await fetchJson(ORDER_URL, {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("accessToken"),
          "Content-Type": "application/json;charset=utf-8"
        },
        body: requestBody
      });
      dispatch(getOrderSuccess(response.order.number));
      dispatch(clearConstructorIngredients());
    } catch (err) {
      dispatch(getOrderFailed());
    }
  };
}
