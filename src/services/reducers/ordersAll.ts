import {
  TWsOrderAllAction,
  WS_ORDERS_ALL_CLOSED,
  WS_ORDERS_ALL_ERROR,
  WS_ORDERS_ALL_GET_MESSAGE,
  WS_ORDERS_ALL_SUCCESS,
} from "services/actions/ordersAll";
import { TOrder } from "services/types/appTypes";

type TOrdersAllState = {
  connected: boolean;
  orders: TOrder[];
  total?: number;
  totalToday?: number;
  error?: Event;
};

const initialState: TOrdersAllState = {
  connected: false,
  orders: [],
};

export default function ordersAllReducer(
  state = initialState,
  action: TWsOrderAllAction
): TOrdersAllState {
  switch (action.type) {
    case WS_ORDERS_ALL_SUCCESS: {
      return {
        ...state,
        connected: true,
      };
    }
    case WS_ORDERS_ALL_ERROR: {
      return { ...state, connected: false };
    }
    case WS_ORDERS_ALL_CLOSED: {
      return { ...state, connected: false };
    }
    case WS_ORDERS_ALL_GET_MESSAGE: {
      const payload = JSON.parse(action.payload);

      return {
        ...state,
        orders: payload.orders,
        total: payload.total,
        totalToday: payload.totalToday,
      };
    }
    default:
      return state;
  }
}
