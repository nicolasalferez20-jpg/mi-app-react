import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useGetUsersQuery} from "../services/usersApi";
import {addFavorite, removeFavorite, selectAllFavorites } from "../features/favorites/FavoritesSlice";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import Error from "../components/Error";
import "./UsersPage.css";


const UsersPage = () => {
    const dispatch = useDispatch();

    const {data: users, isLoading, isError, error} = useGetUsersQuery();

    const favorites = useSelector(selectAllFavorites);

    const [searchTerm, setSearchTerm] = useState("");

    const handleToggleFavorite = (user) => {
        const isFav = favorites.some((fav) => fav.id === user.id);
        if (isFav) {
            dispatch(removeFavorite(user.id));
        } else {
            dispatch(addFavorite(user));
        }
    };

    if (isLoading) {
        return <Loader message= "Cargando el Listado de Usuarios..." />;
    }

    if (isError) {
        return <Error message={error?.data?.message || "Error al Cargar los Usuarios"} />;
    }

    const filteredUsers = users.filter((user) =>
     user.name.toLowerCase().includes(searchTerm.toLowerCase())
     );

    return (
        <div>
            <div className="search-container">
                <input
                type="text"
                placeholder="Buscar Usuarios por Nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                />
             </div>
            

            <div className="users-grid">
                {filteredUsers && filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => {

                    const isFav = favorites.some((fav) => fav.id === user.id);
                    return (
                        <UserCard
                        key={user.id}
                        user={user}
                        isFavorite={isFav}
                        onToggleFavorite={handleToggleFavorite}
                        />
                    );
                })
            ) : (
                <p className="no-results">No se encontraron usuarios que coincidan con la busqueda.</p>
            )}
            </div>
        </div>
    );
};

export default UsersPage;