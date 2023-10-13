import { GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS } from "services/actions/order";

const initialState = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false
};

export default function orderReducer(state = initialState, action) {
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
