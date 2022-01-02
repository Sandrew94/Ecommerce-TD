import { cartSlice } from "../reducer/cartSlice";

export const { addToCart, removeFromCart, saveCartLocalStorage } =
  cartSlice.actions;
