import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Definimos el servicio utilizando una URL base y los endpoints esperados
export const usersApi = createApi({
    reducerPath: 'usersApi',

    // Usamos JSONPlaceholder como API pública recomendada
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),    
    endpoints: (builder) => ({

        // Endpoint para obtener la lista de todos los usuarios
        getUsers: builder.query({
            query: () => 'users',}),

        // Endpoint para ver el detalle de un usuario específico por su ID
            getUserById: builder.query({
            query: (id) => `users/${id}`,
          
        }),
    }),
});

// RTK Query genera automáticamente hooks basados en los nombres de los endpoints
// Estos hooks manejan internamente el estado de carga, error y caché
export const {useGetUsersQuery, useGetUserByIdQuery} = usersApi;