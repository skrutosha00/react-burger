import {
  wsOrdersAllClosed,
  wsOrdersAllError,
  wsOrdersAllGetMessage,
  wsOrdersAllSuccess
} from "services/actions/ordersAll";
import {
  wsProfileOrdersClosed,
  wsProfileOrdersError,
  wsProfileOrdersSuccess
} from "services/actions/profileOrders";
import ordersAllReducer from "services/reducers/ordersAll";
import profileOrdersReducer from "services/reducers/profileOrders";

testWsReducer(
  ordersAllReducer,
  {
    success: wsOrdersAllSuccess,
    error: wsOrdersAllError,
    closed: wsOrdersAllClosed,
    getMessage: wsOrdersAllGetMessage
  },
  {
    connected: true,
    orders: [],
    totalToday: 0,
    total: 0
  }
);

testWsReducer(
  profileOrdersReducer,
  {
    success: wsProfileOrdersSuccess,
    error: wsProfileOrdersError,
    closed: wsProfileOrdersClosed,
    getMessage: wsOrdersAllGetMessage
  },
  {
    connected: true,
    orders: []
  }
);

function testWsReducer(reducer, actions, testMessageResult) {
  describe("ws reducer", () => {
    it("should return the initial state", () => {
      expect(reducer(undefined, {})).toEqual({
        connected: false,
        orders: []
      });
    });

    it("should handle WS_SUCCESS", () => {
      expect(
        reducer({ connected: false, orders: [] }, actions.success())
      ).toEqual({
        connected: true,
        orders: []
      });
    });

    it("should handle WS_ERROR", () => {
      expect(
        reducer({ connected: false, orders: [] }, actions.error())
      ).toEqual({
        connected: false,
        orders: []
      });
    });

    it("should handle WS_CLOSED", () => {
      expect(
        reducer({ connected: false, orders: [] }, actions.closed())
      ).toEqual({
        connected: false,
        orders: []
      });
    });

    it("should handle WS_GET_MESSAGE", () => {
      expect(
        reducer(
          { connected: true, orders: [] },
          actions.getMessage(
            JSON.stringify({
              orders: [],
              totalToday: 0,
              total: 0
            })
          )
        )
      ).toEqual(testMessageResult);
    });
  });
}
