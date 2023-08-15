import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../store-slices/productSlice";
import cartReducer from "../store-slices/cartSlice";

const store = configureStore({
  reducer: {
    productState: productReducer,
    cartState: cartReducer,
  },
});

export default store;
