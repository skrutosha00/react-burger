import fetchJson from "utils/fetchJson";
import { orderUrl } from "utils/globalVars";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export function getOrder(requestBody) {
  return async function (dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST
    });
    try {
      const response = await fetchJson(orderUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: requestBody
      });
      dispatch({
        type: GET_ORDER_SUCCESS,
        number: response.order.number
      });
    } catch (err) {
      dispatch({
        type: GET_ORDER_FAILED
      });
    }
  };
}
