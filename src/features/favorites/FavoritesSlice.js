import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    list: [],// Aquí guardaremos los IDs o los objetos de los usuarios favoritos
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        // Acción para agregar un usuario a favoritos
        addFavorite: (state, action) => {
            // Verificamos si ya existe para no duplicarlo
            const exists = state.list.find(user => user.id === action.payload.id);
            if (!exists) {
                state.list.push(action.payload);
            }
        },
        // Acción para remover un usuario de favoritos
        removeFavorite: (state, action) => {
            state.list = state.list.filter(user => user.id !== action.payload);
        },
    },
});

// Exportamos las acciones para usarlas en los componentes con useDispatch
export const {addFavorite, removeFavorite} = favoritesSlice.actions;

// Exportamos el selector para leer los favoritos con useSelector desde cualquier componente
export const selectAllFavorites = (state) => state.favorites.list;

// Exportamos el reducer para registrarlo en el store
export default favoritesSlice.reducer;