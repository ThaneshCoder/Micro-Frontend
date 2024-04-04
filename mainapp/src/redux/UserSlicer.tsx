import { createSlice } from "@reduxjs/toolkit";
import user from "../../../UserData.json";

interface ProductState {
    allUser: {
        userId: number;
        username: string;
        password: string;
        mailId: string;
        userCartProd:any[];
        userOrderProd: number[];
    }[]
    singleUser: any
}

let initialState: ProductState = { allUser: user.UserData, singleUser: null };

let userSlicer = createSlice({
    name: "user",
    initialState,
    reducers: {
        storeUser: (state, action) => {
            state.singleUser = action.payload
        },
        addToCart: (state, action) => {
                if (!state.singleUser.userCartProd.some((element: any) => element.id === action.payload.id)){
                    state.singleUser.userCartProd.push(action.payload)
                }
        },
        // Increment function
        itemInc: (state, action) => {
            state.singleUser.userCartProd.forEach((element: any) => {
                if (element.id === action.payload.id) {
                    if (element.count < element.instock)
                        element.count++;
                }
            });

        },
        // Decrement function
        itemDec: (state, action) => {
            state.singleUser.userCartProd.forEach((element: any) => {
                if (element.id === action.payload.id) {
                    if (element.count > 1)
                        element.count--;

                }
            });
        },
        // Remove item function 
        removeItem: (state, action) => {
            state.singleUser.userCartProd.forEach((element: any, index: number) => {
                if (element.id === action.payload.id) {
                    state.singleUser.userCartProd.splice(index, 1)
                }
            })
        },
    }

});

export const { storeUser, addToCart,itemInc,itemDec,removeItem} = userSlicer.actions;
export default userSlicer.reducer;
