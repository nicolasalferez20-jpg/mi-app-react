import React from 'react';
import {Link} from 'react-router-dom';
import Button from "./Button";

const UserCard = ({ user,isFavorite, onToggleFavorite}) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-md flex flex-col items-center justify-between hover:shadow-lg transition-shadow">

            // Avatar básico usando las iniciales del usuario
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-3">
                {user.name ? user.name.charAt(0): "U"}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
            <p className="text-gray-500 text-sm">@{user.username}</p>
            <p className="text-gray-500 text-sm mb-4">{user.email}</p>

            <div className="flex gap-3 mt-auto">
                <Button variant="secondary">
                <Link to={`/user/${user.id}`}
                    className="text-white no-underline font-semibold">
                     Ver Detalles
                </Link>
                </Button>
                
                //Boton de agregar y quitar de favoritos
                <Button 
                variant={isFavorite ? "danger" : "primary"}
                onClick={() => onToggleFavorite(user)}
                >
                    {isFavorite ? "quitar" : "favorito"}
                </Button>
            </div>
        </div>
    );
};

export default UserCard;