import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: "Tazul",
  reducers: {
    addProduct: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
