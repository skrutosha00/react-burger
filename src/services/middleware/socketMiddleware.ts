import type { Middleware, MiddlewareAPI } from "redux";
import {
  TWsOrderAllAction,
  WS_ORDERS_ALL_CLOSED,
  WS_ORDERS_ALL_ERROR,
  WS_ORDERS_ALL_GET_MESSAGE,
  WS_ORDERS_ALL_SEND,
  WS_ORDERS_ALL_START,
  WS_ORDERS_ALL_SUCCESS,
} from "services/actions/ordersAll";
import {
  TWsProfileOrdersAction,
  WS_PROFILE_ORDERS_CLOSED,
  WS_PROFILE_ORDERS_ERROR,
  WS_PROFILE_ORDERS_GET_MESSAGE,
  WS_PROFILE_ORDERS_SEND,
  WS_PROFILE_ORDERS_START,
  WS_PROFILE_ORDERS_SUCCESS,
} from "services/actions/profileOrders";
import { AppDispatch, RootState } from "services/types/reduxTypes";

type TWsActions = {
  startAction: typeof WS_ORDERS_ALL_START | typeof WS_PROFILE_ORDERS_START;
  successAction:
    | typeof WS_ORDERS_ALL_SUCCESS
    | typeof WS_PROFILE_ORDERS_SUCCESS;
  errorAction: typeof WS_ORDERS_ALL_ERROR | typeof WS_PROFILE_ORDERS_ERROR;
  messageAction:
    | typeof WS_ORDERS_ALL_GET_MESSAGE
    | typeof WS_PROFILE_ORDERS_GET_MESSAGE;
  closedAction: typeof WS_ORDERS_ALL_CLOSED | typeof WS_PROFILE_ORDERS_CLOSED;
  sendAction: typeof WS_ORDERS_ALL_SEND | typeof WS_PROFILE_ORDERS_SEND;
};

type TWsAction = TWsOrderAllAction | TWsProfileOrdersAction;

export const socketMiddleware = (
  wsUrl: string,
  actions: TWsActions
): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWsAction) => {
      const { dispatch, getState } = store;
      const { type } = action;

      if (type === WS_PROFILE_ORDERS_START) {
        wsUrl += `?token=${getState().auth.accessToken?.replace(
          "Bearer ",
          ""
        )}`;
      }

      if (type === actions.startAction) {
        socket = new WebSocket(wsUrl);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: actions.successAction, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: actions.errorAction, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          dispatch({ type: actions.messageAction, payload: data });
        };

        socket.onclose = (event) => {
          dispatch({ type: actions.closedAction, payload: event });
        };

        if (type === actions.sendAction) {
          const message = action.payload;
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};
