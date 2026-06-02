import React from 'react';
import {Link} from 'react-router-dom';
import Button from "./Button";

const UserCard = ({ user,isFavorite, onToggleFavorite}) => {
    return (
        <div style={styles.card}>
            <div style={styles.avatar}>
                {user.name ? user.name.charAt(0): "U"}
            </div>
            <h3 style={styles.name}>{user.name}</h3>
            <p style={styles.username}>@{user.username}</p>
            <p style={styles.email}>{user.email}</p>

            <div style={styles.actions}>
                <Button variant="secondary">
                <Link to={`/user/${user.id}`}
                    style={styles.link}>
                     Ver Detalles
                </Link>
                </Button>

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

const styles = {
    card: {
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "transform 0.2s",
    },
    avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    },
    name: {
        margin: "0",
        fontSize: "18px",
        color: "#333",
    },
    username: {
        margin: "5px 0",
        color: "#777",
        frontSize: "14px",
    },
    email: {
        margin: "5px 0",
        color: "#777",
        frontSize: "14px",
    },
    actions: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "auto",
        gap: "10px",
    },
    link: {
        color: "#fbfbfb",
        textDecoration: "none",
        fontWeight: "600",
        fontSize: "14px",
    }  
};
export default UserCard;