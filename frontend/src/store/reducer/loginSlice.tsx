import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = { token: string | null; isLoggedIn: boolean };
const initialState: initialStateType = {
  token: localStorage.getItem("token") || "",
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      const storedToken = state.token;
      if (!storedToken) {
        state.token = action.payload;
        state.isLoggedIn = !!state.token;
        localStorage.setItem("token", JSON.stringify(action.payload));
      } else {
        state.token = storedToken;
        state.isLoggedIn = true;
      }
    },
    isLogged: (state) => {
      if (state.isLoggedIn) return;
      const storedToken = localStorage.getItem("token") || "";
      if (storedToken) {
        state.isLoggedIn = true;
      }
      if (storedToken === "") {
        state.isLoggedIn = false;
      }
    },
    logout: (state) => {
      state.token = "";
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
});
