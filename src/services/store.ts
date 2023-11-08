import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "services/reducers";

const enhancer = applyMiddleware(thunk);

export const store = configureStore({
  reducer: rootReducer,
  enhancers: [enhancer],
  devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
