import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [ "Banana", "Apples" ],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        addItem: (state, action) => {
            state.items.pop()
        },
        clearCart: () => {
            state.items = []
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
