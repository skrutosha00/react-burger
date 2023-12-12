import {
  getOrderFailed,
  getOrderRequest,
  getOrderSuccess
} from "services/actions/order";
import orderReducer from "services/reducers/order";

describe("order reducer", () => {
  it("should return the initial state", () => {
    expect(orderReducer(undefined, {})).toEqual({
      orderNumber: null,
      orderRequest: false,
      orderFailed: false
    });
  });

  it("should handle GET_ORDER_REQUEST", () => {
    expect(
      orderReducer(
        {
          orderNumber: null,
          orderRequest: false,
          orderFailed: false
        },
        getOrderRequest()
      )
    ).toEqual({
      orderNumber: null,
      orderRequest: true,
      orderFailed: false
    });
  });

  it("should handle GET_ORDER_SUCCESS", () => {
    expect(
      orderReducer(
        {
          orderFailed: false,
          orderRequest: true
        },
        getOrderSuccess(10)
      )
    ).toEqual({
      orderNumber: 10,
      orderRequest: false,
      orderFailed: false
    });
  });

  it("should handle GET_ORDER_FAILED", () => {
    expect(
      orderReducer(
        {
          orderNumber: null,
          orderFailed: false,
          orderRequest: true
        },
        getOrderFailed()
      )
    ).toEqual({
      orderNumber: null,
      orderRequest: false,
      orderFailed: true
    });
  });
});
