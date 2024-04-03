import { configureStore } from "@reduxjs/toolkit";
import ProductSlicer from "./ProductSlicer";
import UserSlicer from "./UserSlicer";

let store = configureStore({ 
    reducer: {
        product: ProductSlicer,
        user:UserSlicer
    }});

    export type RootStore = ReturnType<typeof store.getState>;//  the getstate current state type
    export default store;
