import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [
  {
    id: 0,
    title: "sneakers",
    price: 23,
    description: "Reliable on your long jogging trail",
  },
  {
    id: 1,
    title: "hat",
    price: 18,
    description: "Worry about summer heat? We got you covered!",
  },
  {
    id: 2,
    title: "chocolate",
    price: 9,
    description: "Taste this flavour and your will taste happiness",
  },
  {
    id: 3,
    title: "computer",
    price: 210,
    description: "Experience the top most entertainement quality",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
});

export default productSlice.reducer;
