import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [
  {
    id: "p1",
    title: "sneakers",
    price: 23,
    description: "Reliable on your long jogging trail",
  },
  {
    id: "p2",
    title: "hat",
    price: 18,
    description: "Worry about summer heat? We got you covered!",
  },
  {
    id: "p3",
    title: "chocolate",
    price: 9,
    description: "Taste this flavour and your will taste happiness",
  },
  {
    id: "p4",
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
