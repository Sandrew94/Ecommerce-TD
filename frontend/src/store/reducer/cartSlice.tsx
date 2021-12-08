import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type initialStateType = {
  items: newItemType;
  totalQuantity: number;
  totalAmount: number;
};

type newItemType = {
  _id: string;
  quantity: number;
  name: string;
  price: number;
  totalPrice: number;
  brand: string;
}[];

type SingleItemType = {} & newItemType[0];

const initialState: initialStateType = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0, //selector??
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item: SingleItemType) => item._id === newItem._id
      );

      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          _id: newItem._id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          brand: newItem.brand,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeFromCart: (state, action) => {
      const _id = action.payload;

      const findItemExistence = state.items.find(
        (item: SingleItemType) => item._id === _id
      );

      if (findItemExistence !== undefined) {
        state.totalQuantity--;
        if (findItemExistence.quantity === 1) {
          findItemExistence.totalPrice -= findItemExistence.price;

          //Remove the card from the CartComponents
          state.items = state.items.filter((item: any) => item._id !== _id);
        } else {
          findItemExistence.totalPrice -= findItemExistence.price;
          findItemExistence.quantity--;
        }
      }
    },
  },
});

//Selector used to calculate the total amount

export const getTotalAmount = (state: RootState): number | void => {
  let arrTotalPrice: number[] = [];

  if (state.cart.items.length === 0) return;

  state.cart.items.forEach((item: SingleItemType) => {
    arrTotalPrice.push(item.totalPrice);
  });

  return Math.trunc(
    arrTotalPrice.reduce((sum: number, amount: number) => sum + amount)
  );
};
