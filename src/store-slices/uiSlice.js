import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartDisplayed: false,
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
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
