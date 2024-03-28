import { createSlice } from "@reduxjs/toolkit";
import prod from "../../../AllProduct.json"

let initialState= {allProducts:prod.AllProduct}
let productSlicer = createSlice({
    name:"product",
    initialState,
    reducers: {
        // actions
        cartSize:(state)=>{ //size of the cart

        },
        cartIncrement:(state)=>{

        },
        cartDecrement:(state)=>{

        }
    }

})
export let {cartSize,cartIncrement,cartDecrement} = productSlicer.actions // destructuring of actions
export default productSlicer.reducer