import { createAsyncThunk } from "@reduxjs/toolkit";

export { launchPutCart, launchGetCart };

const launchPutCart = createAsyncThunk("cart/launchPutCart", async (cart) => {
  const response = await fetch(
    "https://max-react-20-redux-default-rtdb.firebaseio.com/cart.json",
    {
      method: "PUT",
      body: JSON.stringify({
        cartItems: cart.cartItems,
        cartSize: cart.cartSize,
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
});

const launchGetCart = createAsyncThunk("cart/launchGetCart", async () => {
  const response = await fetch(
    "https://max-react-20-redux-default-rtdb.firebaseio.com/cart.json"
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  if(data.cartSize === 0) {
    throw new Error("Your remote cart is empty!")
  }
  return data;
});
