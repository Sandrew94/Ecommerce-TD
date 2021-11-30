import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = { token: string; isLoggedIn: boolean };
const initialState: initialStateType = { token: "", isLoggedIn: false };

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.token = action.payload; // action.payload is the token
      state.isLoggedIn = !!state.token; // !!state.token is a confirm that the token is not empty and return true
    },
    logout: (state) => {
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});
