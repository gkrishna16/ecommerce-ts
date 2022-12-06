import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type sliceState = {
  products: [];
  quantity: number;
  total: number;
};

const cartSlice = createSlice({
  name: `cart`,
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      // @ts-ignore
      state.products.push(action.payload);
      state.total += action.payload.quantity * action.payload.price;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
