import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  items: string[] | null;
  totalQuantity: number;
  totalAmount: number;
};

const initialState: initialStateType = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
