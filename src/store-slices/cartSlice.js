import { createSlice } from "@reduxjs/toolkit";

import { launchGetCart } from "../async-action/asyncThunk";

const initialState = {
  cartItems: [],
  cartSize: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          total: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.quantity * existingItem.price;
      }
      state.cartSize = state.cartItems.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.quantity;
      }, 0);
      state.changed = true;
    },
    removeItem(state, action) {
      const id = action.payload.id;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.quantity * existingItem.price;
      }
      state.cartSize = state.cartItems.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.quantity;
      }, 0);
      state.changed = true;
    },
  },
  extraReducers(builder) {
    builder.addCase(launchGetCart.fulfilled, (state, action) => {
      state.cartItems = action.payload.cartItems;
      state.cartSize = action.payload.cartSize;
    });
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
