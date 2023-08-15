import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../store-slices/productSlice";
import cartReducer from "../store-slices/cartSlice";
import uiReducer from "../store-slices/uiSlice";

const store = configureStore({
  reducer: {
    productState: productReducer,
    cartState: cartReducer,
    uiState: uiReducer,
  },
});

export default store;
