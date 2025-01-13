import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0 ,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        add : (state) => {
            state.value +=1
        }
    }
})


export const {add} = cartSlice.actions

export default cartSlice.reducer