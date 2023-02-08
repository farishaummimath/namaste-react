import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
});
export default store;

/* 
# Create store
     using configureStore api from rtk
    
# Provider    - provide store to app

    <Provider store={store}> - import from react-redux

# Slice 
    - createSlice -  from "@reduxjs/toolkit"
    - createSlice({
        name:
        initialState:{
            reducer: {
                action and reducer functions
                addItem : (state,action) =>{
                    state.items.push(action.payload); // do not return anything
                }
            }
        }
    })

    export default cardSlice.reducer;
    export {addItem,removeItem,clearCart} = cardSlice.actions

# add slice to store
    reducer : {
        cart: cartSlice,
        user: userSlice
    }    
*/