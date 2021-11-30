import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { loginSlice } from "./reducer/loginReducer";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export type AppDispatcher = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatcher>();

export type RootState = ReturnType<typeof store.getState>;
