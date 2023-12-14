import type { Middleware, MiddlewareAPI } from "redux";
import {
  TWsOrderAllAction,
  WS_ORDERS_ALL_CLOSE,
  WS_ORDERS_ALL_CLOSED,
  WS_ORDERS_ALL_ERROR,
  WS_ORDERS_ALL_GET_MESSAGE,
  WS_ORDERS_ALL_SEND,
  WS_ORDERS_ALL_START,
  WS_ORDERS_ALL_SUCCESS
} from "services/actions/ordersAll";
import {
  TWsProfileOrdersAction,
  WS_PROFILE_ORDERS_CLOSE,
  WS_PROFILE_ORDERS_CLOSED,
  WS_PROFILE_ORDERS_ERROR,
  WS_PROFILE_ORDERS_GET_MESSAGE,
  WS_PROFILE_ORDERS_SEND,
  WS_PROFILE_ORDERS_START,
  WS_PROFILE_ORDERS_SUCCESS
} from "services/actions/profileOrders";
import { getToken } from "services/actions/token";
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
  closeAction: typeof WS_ORDERS_ALL_CLOSE | typeof WS_PROFILE_ORDERS_CLOSE;
};

type TWsAction = TWsOrderAllAction | TWsProfileOrdersAction;

export const socketMiddleware = (actions: TWsActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    let connected = false;
    let url: string;

    return (next) => (action: TWsAction) => {
      const { dispatch, getState } = store;
      const { type } = action;

      if (type === actions.startAction) {
        url = action.url;
        socket = new WebSocket(url);
        connected = true;
      }

      if (type === actions.closeAction) {
        socket?.close();
        connected = false;
      }

      if (type === actions.errorAction && connected) {
        getToken(
          JSON.stringify({
            token: getState().auth.refreshToken
          })
        )(dispatch).then(() => {
          socket = new WebSocket(url);
        });
      }

      if (socket) {
        socket.onopen = (event) => {
          connected = true;
          dispatch({ type: actions.successAction, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: actions.errorAction, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const { success, message } = JSON.parse(data);

          if (success) {
            dispatch({ type: actions.messageAction, payload: data });
          } else if (message === "Invalid or missing token" && connected) {
            dispatch({ type: actions.errorAction, payload: event });
          }
        };

        socket.onclose = (event) => {
          connected = false;
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
