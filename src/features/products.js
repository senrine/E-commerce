import { createSlice } from "@reduxjs/toolkit";
import { createCartItem } from "./cart";
import { removeFromCart } from "./cart";

const initialState = {
    items: undefined
}

export const products = createSlice({
    name: "products",
    initialState,
    reducers:{
        addProduct: (state, action) =>{
            state.items = action.payload
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(createCartItem, (state, action)=> {
            state.items.find(item => item.id === action.payload.id).picked =true
        }),
        builder
        .addCase(removeFromCart, (state, action)=> {
            state.items.find(item => item.id === action.payload).picked =false
        })
    }
})


export function getProductsList(action){
    return function(dispatch,getState){
        fetch("/data/inventory.json")
        .then(response => response.json())
        .then(data => dispatch(addProduct(data.products)))
    }
}


export const {addProduct} = products.actions
export default products.reducer