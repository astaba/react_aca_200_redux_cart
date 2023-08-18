import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartDisplayed: false,
  notification: null, 
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state, action) {
      state.isCartDisplayed = action.payload
        ? action.payload.switcher
        : !state.isCartDisplayed;
    },
    notify(state, action) {
      state.notification = action.payload;
    }
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
