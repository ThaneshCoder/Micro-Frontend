import { createSlice } from "@reduxjs/toolkit";
import prod from "../../../AllProduct.json";
import { Snackbar } from "@mui/material";

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
      else{
       alert ("already added");  
      }
    },
    // Increment function
    itemInc: (state, action) => {
      state.cartProduct.forEach((element: any) => {
        if (element.id === action.payload.id) {
          if (element.count < element.instock)
            element.count++;
        }
      });

    },
    // Decrement function
    itemDec: (state, action) => {
      state.cartProduct.forEach((element: any) => {
        if (element.id === action.payload.id) {
          if (element.count > 1)
            element.count--;

        }
      });
    },
    // Remove item function 
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
