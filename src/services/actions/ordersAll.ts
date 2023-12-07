export const WS_ORDERS_ALL_START = "WS_ORDERS_ALL_START";
export const WS_ORDERS_ALL_SUCCESS = "WS_ORDERS_ALL_SUCCESS";
export const WS_ORDERS_ALL_ERROR = "WS_ORDERS_ALL_ERROR";
export const WS_ORDERS_ALL_GET_MESSAGE = "WS_ORDERS_ALL_GET_MESSAGE";
export const WS_ORDERS_ALL_CLOSED = "WS_ORDERS_ALL_CLOSED";
export const WS_ORDERS_ALL_SEND = "WS_ORDERS_ALL_SEND";
export const WS_ORDERS_ALL_CLOSE = "WS_ORDERS_ALL_CLOSE";

export type TWsOrdersAllStartAction = {
  type: typeof WS_ORDERS_ALL_START;
  url: string;
};

export type TWsOrdersAllSuccessAction = {
  type: typeof WS_ORDERS_ALL_SUCCESS;
  payload: Event;
};

export type TWsOrdersAllErrorAction = {
  type: typeof WS_ORDERS_ALL_ERROR;
  payload: Event;
};

export type TWsOrdersAllGetMessageAction = {
  type: typeof WS_ORDERS_ALL_GET_MESSAGE;
  payload: string;
};

export type TWsOrdersAllClosedAction = {
  type: typeof WS_ORDERS_ALL_CLOSED;
  payload: Event;
};

export type TWsOrdersAllSendAction = {
  type: typeof WS_ORDERS_ALL_SEND;
  payload: Object;
};

export type TWsOrdersAllCloseAction = {
  type: typeof WS_ORDERS_ALL_CLOSE;
};

export type TWsOrderAllAction =
  | TWsOrdersAllStartAction
  | TWsOrdersAllSuccessAction
  | TWsOrdersAllErrorAction
  | TWsOrdersAllGetMessageAction
  | TWsOrdersAllClosedAction
  | TWsOrdersAllSendAction
  | TWsOrdersAllCloseAction;

export function wsOrdersAllStart(url: string): TWsOrdersAllStartAction {
  return {
    type: WS_ORDERS_ALL_START,
    url,
  };
}

export function wsOrdersAllSuccess(payload: Event): TWsOrdersAllSuccessAction {
  return {
    type: WS_ORDERS_ALL_SUCCESS,
    payload,
  };
}

export function wsOrdersAllError(payload: Event): TWsOrdersAllErrorAction {
  return {
    type: WS_ORDERS_ALL_ERROR,
    payload,
  };
}

export function wsOrdersAllGetMessage(
  payload: string
): TWsOrdersAllGetMessageAction {
  return {
    type: WS_ORDERS_ALL_GET_MESSAGE,
    payload,
  };
}

export function wsOrdersAllClosed(payload: Event): TWsOrdersAllClosedAction {
  return {
    type: WS_ORDERS_ALL_CLOSED,
    payload,
  };
}

export function wsOrdersAllClose(): TWsOrdersAllCloseAction {
  return {
    type: WS_ORDERS_ALL_CLOSE,
  };
}
