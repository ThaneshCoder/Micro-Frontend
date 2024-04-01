import { createSlice } from "@reduxjs/toolkit";
import prod from "../../../AllProduct.json";

interface ProductState {
  allProducts: any[]; // Adjust the type according to your product structure
  cartProduct: any; // Adjust the type according to your cartProduct structure
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
    },
    itemInc: (state, action) => {
      state.cartProduct.forEach((element: any) => {
        if (element.id === action.payload.id) {
          if (element.count < element.instock)
            element.count++;
        }
      });

    },
    itemDec: (state, action) => {
      state.cartProduct.forEach((element: any) => {
        if (element.id === action.payload.id) {
          if (element.count > 1)
            element.count--;

        }
      });
    },
    removeItem: (state, action) => {
      state.cartProduct.forEach((element: any, index: number) => {
        if (element.id === action.payload.id) {
          state.cartProduct.splice(index, 1)
        }
      })
    },
  },
});

export const { cartItem, itemInc, itemDec, removeItem } = productSlicer.actions;
export default productSlicer.reducer;
