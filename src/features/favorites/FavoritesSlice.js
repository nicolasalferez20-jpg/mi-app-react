import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    list: [],
};
export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const exists = state.list.find(user => user.id === action.payload.id);
            if (!exists) {
                state.list.push(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            state.list = state.list.filter(user => user.id !== action.payload);
        },
    },
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;

export const selectAllFavorites = (state) => state.favorites.list;

export default favoritesSlice.reducer;