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
import ordersAllReducer, { initialState } from "services/reducers/ordersAll";
import profileOrdersReducer from "services/reducers/profileOrders";

const connectedState = {
  ...initialState,
  connected: true
};

testWsReducer(
  ordersAllReducer,
  {
    success: wsOrdersAllSuccess,
    error: wsOrdersAllError,
    closed: wsOrdersAllClosed,
    getMessage: wsOrdersAllGetMessage
  },
  {
    ...connectedState,
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
  connectedState
);

function testWsReducer(reducer, actions, testMessageResult) {
  describe("ws reducer", () => {
    it("should return the initial state", () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    it("should handle WS_SUCCESS", () => {
      expect(reducer(initialState, actions.success())).toEqual(connectedState);
    });

    it("should handle WS_ERROR", () => {
      expect(reducer(connectedState, actions.error())).toEqual(initialState);
    });

    it("should handle WS_CLOSED", () => {
      expect(reducer(connectedState, actions.closed())).toEqual(initialState);
    });

    it("should handle WS_GET_MESSAGE", () => {
      expect(
        reducer(
          connectedState,
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
