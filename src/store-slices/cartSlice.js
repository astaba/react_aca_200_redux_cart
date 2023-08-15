import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartSize: 0,
  isCartDisplayed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const id = action.payload.id;
      const index = state.cartItems.findIndex((item) => item.id === id);
      if (index === -1) {
        state.cartItems.push(action.payload);
      } else {
        state.cartItems[index].quantity++;
        const qty = state.cartItems[index].quantity;
        const price = state.cartItems[index].price;
        state.cartItems[index].total = qty * price;
      }
      state.cartSize = state.cartItems.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.quantity;
      }, 0);
    },
    removeItem(state, action) {
      const id = action.payload.id;
      const index = state.cartItems.findIndex((item) => item.id === id);
      if (state.cartItems[index].quantity === 1) {
        state.cartItems.splice(index, 1);
      } else {
        state.cartItems[index].quantity--;
        const qty = state.cartItems[index].quantity;
        const price = state.cartItems[index].price;
        state.cartItems[index].total = qty * price;
      }
      state.cartSize = state.cartItems.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.quantity;
      }, 0);
      if (state.cartSize === 0) state.isCartDisplayed = false;
    },
    toggleCart(state, action) {
      state.isCartDisplayed = !state.isCartDisplayed;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
