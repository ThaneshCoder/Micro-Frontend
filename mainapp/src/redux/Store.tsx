import { configureStore } from "@reduxjs/toolkit";
import ProductSlicer from "./ProductSlicer";

let store = configureStore({ 
    reducer: {product: ProductSlicer, }});

    export type Tanay = ReturnType<typeof store.getState>;//  the getstate current state type
    export default store;
