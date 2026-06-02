import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useGetUsersQuery} from "../services/usersApi";
import {addFavorite, removeFavorite, selectAllFavorites } from "../features/favorites/FavoritesSlice";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import Error from "../components/Error";

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
            <div
                style={styles.searchContainer}>
                <input
                type="text"
                placeholder="Buscar Usuarios por Nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.input}
                />
            </div>

            <div style={styles.grid}>
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
                <p style={styles.noResults}>No se encontraron usuarios que coincidan con la busqueda.</p>
            )}
            </div>
        </div>
    );
};
const styles = {
    searchContainer: {
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
    },
    input: {
        width: "100%",
        maxWidth: "400px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        fontSize: "16px",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
    },
    noResults: {
        gridColumn: "1 / -1",
        textAlign: "center",
        color: "#777",
        fontSize: "18px",
        marginTop: "20px",
    },
};

export default UsersPage;