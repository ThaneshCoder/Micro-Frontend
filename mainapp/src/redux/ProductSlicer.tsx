import { createSlice } from "@reduxjs/toolkit";
import prod from "../../../AllProduct.json";

interface ProductState {
  allProducts: any[]; // Adjust the type according to your product structure
  cartProduct: any; // Adjust the type according to your cartProduct structure
}

let initialState: ProductState = { allProducts: prod.AllProduct, cartProduct:[] };

let productSlicer = createSlice({
  name: "product",
  initialState,
  reducers: {
    cartActionData: (state, action) => {
      state.cartProduct.push(state.allProducts[action.payload])
    },
    cartIncrement: (state) => {},
    cartDecrement: (state) => {},
  },
});

export const { cartActionData, cartIncrement, cartDecrement } = productSlicer.actions;
export default productSlicer.reducer;
