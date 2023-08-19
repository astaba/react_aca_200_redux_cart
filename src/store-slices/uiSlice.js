import { createSlice } from "@reduxjs/toolkit";

import { launchPutCart, launchGetCart } from "../async-action/asyncThunk";

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
    },
  },
  extraReducers(builder) {
    builder.addCase(launchPutCart.pending, (state, action) => {
      state.notification = {
        status: "pending",
        title: "Is pending...",
        message: "The PUT request was launched",
      };
    });
    builder.addCase(launchPutCart.fulfilled, (state, action) => {
      state.notification = {
        status: "success",
        title: "Success!",
        message: "Updated cart successfully!",
      };
    });
    builder.addCase(launchPutCart.rejected, (state, action) => {
      state.notification = {
        status: "error",
        title: "Failed!",
        message: action.error.message,
      };
    });
    builder.addCase(launchGetCart.fulfilled, (state, action) => {
      state.notification = {
        status: "success",
        title: "Success!",
        message: "Fetched cart successfully!",
      };
    });
    builder.addCase(launchGetCart.rejected, (state, action) => {
      state.notification = {
        status: "error",
        title: "Failed!",
        message: action.error.message,
      };
    });
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
