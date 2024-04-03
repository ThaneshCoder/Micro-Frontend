import { createSlice } from "@reduxjs/toolkit";
import prod from "../../../AllProduct.json";

interface ProductState {
  allProducts: any[]; // To display all products in serviceone
  cartProduct: any; // To display all the cart products from servicetwo
}

let initialState: ProductState = { allProducts: prod.AllProduct, cartProduct: [] };

let productSlicer = createSlice({
  name: "product",
  initialState,
  reducers: {
    cartItem: (state, action) => {
      if (!state.cartProduct.some((element: any) => element.id === action.payload)) {
        state.cartProduct.push(...state.allProducts.filter(e => e.id === action.payload));
      }
    }
  },
});

export const { cartItem } = productSlicer.actions;
export default productSlicer.reducer;
