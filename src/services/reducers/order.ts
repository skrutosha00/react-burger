import {
  GET_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  TGetOrderFailedAction,
  TGetOrderRequestAction,
  TGetOrderSuccessAction
} from "services/actions/order";

type TOrderState = {
  orderNumber: number | null;
  orderRequest: boolean;
  orderFailed: boolean;
};

export type TOrderAction =
  | TGetOrderSuccessAction
  | TGetOrderFailedAction
  | TGetOrderRequestAction;

export const initialState: TOrderState = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false
};

export default function orderReducer(
  state = initialState,
  action: TOrderAction
): TOrderState {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderNumber: null,
        orderRequest: true,
        orderFailed: false
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderNumber: action.number
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderNumber: null,
        orderRequest: false,
        orderFailed: true
      };
    }
    default:
      return state;
  }
}
