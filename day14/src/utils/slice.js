import { createSlice } from '@reduxjs/toolkit';
const appSlice = createSlice({
    name: "app",
    initialState: { isMenuOpen: true },
    reducers: {
        togglesMenuOpen: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
});

export const { togglesMenuOpen } = appSlice.actions;
export default appSlice.reducer;