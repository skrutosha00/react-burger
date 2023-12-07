import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "services/reducers";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { ORDERS_All_URL, PROFILE_ORDERS_URL } from "./globalVars";
import {
  WS_ORDERS_ALL_CLOSED,
  WS_ORDERS_ALL_ERROR,
  WS_ORDERS_ALL_GET_MESSAGE,
  WS_ORDERS_ALL_SEND,
  WS_ORDERS_ALL_START,
  WS_ORDERS_ALL_SUCCESS,
} from "services/actions/ordersAll";
import {
  WS_PROFILE_ORDERS_CLOSED,
  WS_PROFILE_ORDERS_ERROR,
  WS_PROFILE_ORDERS_GET_MESSAGE,
  WS_PROFILE_ORDERS_SEND,
  WS_PROFILE_ORDERS_START,
  WS_PROFILE_ORDERS_SUCCESS,
} from "services/actions/profileOrders";

const enhancers = [
  applyMiddleware(thunk),
  applyMiddleware(
    socketMiddleware(ORDERS_All_URL, {
      startAction: WS_ORDERS_ALL_START,
      successAction: WS_ORDERS_ALL_SUCCESS,
      errorAction: WS_ORDERS_ALL_ERROR,
      messageAction: WS_ORDERS_ALL_GET_MESSAGE,
      closedAction: WS_ORDERS_ALL_CLOSED,
      sendAction: WS_ORDERS_ALL_SEND,
    })
  ),
  applyMiddleware(
    socketMiddleware(PROFILE_ORDERS_URL, {
      startAction: WS_PROFILE_ORDERS_START,
      successAction: WS_PROFILE_ORDERS_SUCCESS,
      errorAction: WS_PROFILE_ORDERS_ERROR,
      messageAction: WS_PROFILE_ORDERS_GET_MESSAGE,
      closedAction: WS_PROFILE_ORDERS_CLOSED,
      sendAction: WS_PROFILE_ORDERS_SEND,
    })
  ),
];

export const store = configureStore({
  reducer: rootReducer,
  enhancers,
  devTools: process.env.NODE_ENV !== "production",
});
