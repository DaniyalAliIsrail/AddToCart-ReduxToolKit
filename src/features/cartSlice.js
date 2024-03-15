import {createSlice} from "@reduxjs/toolkit"
import productData from "../productData";

const initialState = {
    cart : [],
    items : productData,
    totalQuantity : 0,
    totalPrice : 0,
};

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart : (state,action)=>{
            let find = state.cart.findIndex((item)=>{
                return item.id === action.payload.id
            })
            console.log(find);
            if(find >= 0){
                state.cart[find].quantity++
            }else{
                state.cart.push(action.payload)
            }
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
