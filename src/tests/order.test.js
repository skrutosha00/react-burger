import {
  getOrderFailed,
  getOrderRequest,
  getOrderSuccess
} from "services/actions/order";
import orderReducer, { initialState } from "services/reducers/order";

const requestState = {
  ...initialState,
  orderRequest: true
};

const failedState = {
  ...initialState,
  orderFailed: true
};

describe("order reducer", () => {
  it("should return the initial state", () => {
    expect(orderReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_ORDER_REQUEST", () => {
    expect(orderReducer(initialState, getOrderRequest())).toEqual(requestState);
  });

  it("should handle GET_ORDER_SUCCESS", () => {
    expect(orderReducer(requestState, getOrderSuccess(10))).toEqual({
      ...initialState,
      orderNumber: 10
    });
  });

  it("should handle GET_ORDER_FAILED", () => {
    expect(orderReducer(requestState, getOrderFailed())).toEqual(failedState);
  });
});
