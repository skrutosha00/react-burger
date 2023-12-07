export const WS_PROFILE_ORDERS_START = "WS_PROFILE_ORDERS_START";
export const WS_PROFILE_ORDERS_SUCCESS = "WS_PROFILE_ORDERS_SUCCESS";
export const WS_PROFILE_ORDERS_ERROR = "WS_PROFILE_ORDERS_ERROR";
export const WS_PROFILE_ORDERS_GET_MESSAGE = "WS_PROFILE_ORDERS_GET_MESSAGE";
export const WS_PROFILE_ORDERS_CLOSED = "WS_PROFILE_ORDERS_CLOSED";
export const WS_PROFILE_ORDERS_SEND = "WS_PROFILE_ORDERS_SEND";
export const WS_PROFILE_ORDERS_CLOSE = "WS_PROFILE_ORDERS_CLOSE";

export type TWsProfileOrdersStartAction = {
  type: typeof WS_PROFILE_ORDERS_START;
  url: string;
};

export type TWsProfileOrdersSuccessAction = {
  type: typeof WS_PROFILE_ORDERS_SUCCESS;
  payload: Event;
};

export type TWsProfileOrdersErrorAction = {
  type: typeof WS_PROFILE_ORDERS_ERROR;
  payload: Event;
};

export type TWsProfileOrdersGetMessageAction = {
  type: typeof WS_PROFILE_ORDERS_GET_MESSAGE;
  payload: string;
};

export type TWsProfileOrdersClosedAction = {
  type: typeof WS_PROFILE_ORDERS_CLOSED;
  payload: Event;
};

export type TWsProfileOrdersSendAction = {
  type: typeof WS_PROFILE_ORDERS_SEND;
  payload: Object;
};

export type TWsProfileOrdersCloseAction = {
  type: typeof WS_PROFILE_ORDERS_CLOSE;
};

export type TWsProfileOrdersAction =
  | TWsProfileOrdersStartAction
  | TWsProfileOrdersSuccessAction
  | TWsProfileOrdersErrorAction
  | TWsProfileOrdersGetMessageAction
  | TWsProfileOrdersClosedAction
  | TWsProfileOrdersSendAction
  | TWsProfileOrdersCloseAction;

export function wsProfileOrdersStart(url: string): TWsProfileOrdersStartAction {
  return {
    type: WS_PROFILE_ORDERS_START,
    url,
  };
}

export function wsProfileOrdersSuccess(
  payload: Event
): TWsProfileOrdersSuccessAction {
  return {
    type: WS_PROFILE_ORDERS_SUCCESS,
    payload,
  };
}

export function wsProfileOrdersError(
  payload: Event
): TWsProfileOrdersErrorAction {
  return {
    type: WS_PROFILE_ORDERS_ERROR,
    payload,
  };
}

export function wsProfileOrdersGetMessage(
  payload: string
): TWsProfileOrdersGetMessageAction {
  return {
    type: WS_PROFILE_ORDERS_GET_MESSAGE,
    payload,
  };
}

export function wsProfileOrdersClosed(
  payload: Event
): TWsProfileOrdersClosedAction {
  return {
    type: WS_PROFILE_ORDERS_CLOSED,
    payload,
  };
}

export function wsProfileOrdersClose(): TWsProfileOrdersCloseAction {
  return {
    type: WS_PROFILE_ORDERS_CLOSE,
  };
}
