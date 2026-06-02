import React from 'react';
import {useParams, Link } from "react-router-dom";
import {useGetUserByIdQuery} from "../services/usersApi";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Button from "../components/Button";

const UserDetail = () => {

    const {id} = useParams();

    const {data: user, isLoading, isError, error} = useGetUserByIdQuery(id);

    if (isLoading){
        return <Loader message={`Cargando informacion del usuario #${id}...`} />;
    }


    if (isError) {
        return <Error message={error?.data?.message || "No se pudo encontrar el usuario."} />;
    }

    return (
        <div style={styles.container}>

            <Link to="/" style={styles.backLink}>
            <Button variant="secondary">
            volver al listado
            </Button>
            </Link>

            <div style={styles.detailsCard}>
                <div style={styles.header}>
                    <div style={styles.avatar}> {user.name?.charAt(0)}</div>
                    <div style={styles.infoSection}>
                    <h2>{user.name}</h2>
                    <p style={styles.username}> @{user?.username}</p>
                    </div>
                </div>

                <hr style={styles.divider}/>

                <div style={styles.infoSection}>
                    <h3> Informacion de Contacto</h3>
                    <p><strong> Correo Electronico:</strong> {user?.email}</p>
                    <p><strong> Telefono:</strong> {user?.phone}</p>
                    <p><strong> Sitio web:</strong> {user?.website}</p>
                </div>

                <div style={styles.infoSection}>
                    <h3> Empresa</h3>
                    <p><strong> Nombre:</strong> {user?.company?.name}</p>
                    <p><strong> Eslogan:</strong> <em> {user?.company?.catchPhrase}</em></p>
                </div>

                <div style={styles.infoSection}>
                    <h3> Ubicacion</h3>
                    <p><strong> Ciudad:</strong> {user?.address?.city}</p>
                    <p><strong> Calle:</strong> {user?.address?.street} ({user?.address?.suite})</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
    },
    backLink: {
        display: "flex",
        justifyContent: "flex-start",
        marginBottom: "10px",
        textDecoration: "none",
        color: "#6c87de",
    },
    detailsCard: {
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    header: {
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     textAlign: "center",
     marginBottom: "20px",
    },
    avatar: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      backgroundColor: "#747482",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "32px",
      fontWeight: "bold",
    },
    username: {
      margin: "5px 0 0",
      color: "#6b7280",
      fontSize: "18px",
    },
    divider: {
        border: "none",
        borderTop: "1px solid #e5e7eb",
        margin: "20px 0",
    },
      infoSection: {
      display: "flex",
      flexDirection: "column"
    },
};

export default UserDetail;