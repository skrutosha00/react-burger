import {
  TWsProfileOrdersAction,
  WS_PROFILE_ORDERS_CLOSED,
  WS_PROFILE_ORDERS_ERROR,
  WS_PROFILE_ORDERS_GET_MESSAGE,
  WS_PROFILE_ORDERS_SUCCESS,
} from "services/actions/profileOrders";
import { TOrder } from "services/types/appTypes";

type TProfileOrdersState = {
  connected: boolean;
  orders: TOrder[];

  error?: Event;
};

const initialState: TProfileOrdersState = {
  connected: false,
  orders: [],
};

export default function ordersAllReducer(
  state = initialState,
  action: TWsProfileOrdersAction
): TProfileOrdersState {
  switch (action.type) {
    case WS_PROFILE_ORDERS_SUCCESS: {
      return {
        ...state,
        connected: true,
      };
    }
    case WS_PROFILE_ORDERS_ERROR: {
      return { ...state, connected: false };
    }
    case WS_PROFILE_ORDERS_CLOSED: {
      return { ...state, connected: false };
    }
    case WS_PROFILE_ORDERS_GET_MESSAGE: {
      const payload = JSON.parse(action.payload);

      return {
        ...state,
        orders: payload.orders,
      };
    }
    default:
      return state;
  }
}
