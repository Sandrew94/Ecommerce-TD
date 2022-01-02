import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type reduceSum = (sum: number, amount: number) => number;

export type initialStateType = {
  items: newItemType;
  totalQuantity: number;
};

export type newItemType = {
  _id: string;
  image: string;
  quantity: number;
  name: string;
  price: number;
  totalPrice: number;
  brand: string;
}[];

export type SingleItemType = {} & newItemType[0];

const initialState: initialStateType = {
  items: [],
  totalQuantity: 0,
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
          image: newItem.image,
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
          state.items = state.items.filter(
            (item: SingleItemType) => item._id !== _id
          );
        } else {
          findItemExistence.totalPrice -= findItemExistence.price;
          findItemExistence.quantity--;
        }
      }
    },
    saveCartLocalStorage: (state: any) => {
      localStorage.setItem("cartState", JSON.stringify(state));
      //https://stackoverflow.com/questions/68421040/local-storage-using-redux-toolkit
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

  const callBackSum: reduceSum = (sum, amount) => sum + amount;

  return Math.trunc(arrTotalPrice.reduce(callBackSum));
};
