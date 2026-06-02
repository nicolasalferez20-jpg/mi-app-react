import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {selectAllFavorites, removeFavorite } from "../features/favorites/FavoritesSlice";
import UserCard from "../components/UserCard";
import "./FavoritesPage.css";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectAllFavorites);

  const handleToggleFavorite = (user) => {
    dispatch(removeFavorite(user.id));
  };
  return (
    <div className="favorites-container">
      <h2 className="title">Usuarios Favoritos</h2>

      {favorites.length > 0 ? (
        <div className="grid">
          {favorites.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              isFavorite={true}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <p className="no-favorites">
          Aún no has agregado usuarios a favoritos.
        </p>
      )}
    </div>
  );
};

export default FavoritesPage;