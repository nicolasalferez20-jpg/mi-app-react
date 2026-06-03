import {configureStore} from '@reduxjs/toolkit';
import {usersApi} from '../services/usersApi';
import favoritesReducer from "../features/favorites/favoritesSlice";

// Vinculamos el slice de favoritos al estado global
export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    
    // Registramos el reducer de RTK Query de forma dinámica
    [usersApi.reducerPath]: usersApi.reducer,
    
  },
  // El middleware es obligatorio para habilitar el caching y refetching de RTK Query
    middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(usersApi.middleware),
});
