import {configureStore} from '@reduxjs/toolkit';
import {usersApi} from '../services/usersApi';
import favoritesReducer from "../features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,

    [usersApi.reducerPath]: usersApi.reducer,
    
  },
    middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(usersApi.middleware),
});
