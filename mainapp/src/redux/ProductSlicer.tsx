import { createSlice } from "@reduxjs/toolkit";
import prod from "../../../AllProduct.json";

interface ProductState {
  allProducts: any[]; // To display all products in serviceone
}

let initialState: ProductState = { allProducts: prod.AllProduct};

let productSlicer = createSlice({
  name: "product",
  initialState,
  reducers: {
    cartItem: (state, action) => {
      
    }
  },
});

export const { cartItem } = productSlicer.actions;
export default productSlicer.reducer;
