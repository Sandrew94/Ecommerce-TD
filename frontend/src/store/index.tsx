import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cartSlice } from "./reducer/cartSlice";
import { loginSlice } from "./reducer/loginSlice";

const rootReducer = combineReducers({
  login: loginSlice.reducer,
  cart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatcher = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatcher>();

export type RootState = ReturnType<typeof store.getState>;
