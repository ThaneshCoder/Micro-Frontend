// import { createSlice } from "@reduxjs/toolkit";
// import prod from "../../../AllProduct.json";


// let initialState = { allProducts: prod.AllProduct, cartProduct: {} };
// let productSlicer = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     // actions
//     cartActionData: (state, action) => { 
//         console.log(state);
//     },
//     cartIncrement: (state) => {},
//     cartDecrement: (state) => {},
//   },
// });
// export let { cartActionData, cartIncrement, cartDecrement } = productSlicer.actions; // destructuring of actions
// export default productSlicer.reducer;


import { createSlice } from "@reduxjs/toolkit";
import prod from "../../../AllProduct.json";

interface ProductState {
  allProducts: any[]; // Adjust the type according to your product structure
  cartProduct: any; // Adjust the type according to your cartProduct structure
}

let initialState: ProductState = { allProducts: prod.AllProduct, cartProduct: {} };

let productSlicer = createSlice({
  name: "product",
  initialState,
  reducers: {
    cartActionData: (state, action) => {
      console.log("Current State:", state); // Log the current state
      // Make changes to the state here if needed
    },
    cartIncrement: (state) => {},
    cartDecrement: (state) => {},
  },
});

export const { cartActionData, cartIncrement, cartDecrement } = productSlicer.actions;
export default productSlicer.reducer;
