import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  // items: string[];
  items: any;
  totalQuantity: number;
  totalAmount: number;
};

type newItemType = {
  id: string;
  quantity: number;
  totalAmount: number;
  name: string;
  price: number;
  totalPrice: number;
  brand: string;
}[];

type SingleItemType = {} & newItemType[0];

const initialState: initialStateType = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action) => {
    //   const { item } = action.payload;

    //   const itemIndex = state.items.indexOf(item);

    //   state.totalQuantity += 1;
    //   if (itemIndex === -1) {
    //     state.items.push({ item, quantity: 1 });
    //     state.totalAmount += item.price;
    //   } else {
    //     console.log("ci entra");
    //     state.totalQuantity += 1;
    //     state.totalAmount += item.price;
    //   }
    // }, //NON AGGIUNGE ARRAY SIMILI

    addToCart: (state, action) => {
      const newItem = action.payload;
      let arrTotalPrice: number[] = [];

      const existingItem = state.items.find(
        (item: any) => item._id === newItem._id
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

      //Calculate the total amount
      state.items.forEach((item: SingleItemType) => {
        arrTotalPrice.push(item.totalPrice);
      });

      state.totalAmount = Math.trunc(
        arrTotalPrice.reduce((sum: number, amount: number) => sum + amount)
      );
    },
  },
});
