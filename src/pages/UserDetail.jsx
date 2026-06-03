import React from 'react';
import {useParams, Link } from "react-router-dom";
import {useGetUserByIdQuery} from "../services/usersApi";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Button from "../components/Button";
import "./UserDetail.css";


const UserDetail = () => {
    //  Extraemos el id de los parámetros de la ruta (URL)
    const {id} = useParams();
    //  Consumimos el endpoint específico usando el id capturado
    const {data: user, isLoading, isError, error} = useGetUserByIdQuery(id);

    if (isLoading){
        return <Loader message={`Cargando informacion del usuario #${id}...`} />;
    }


    if (isError) {
        return <Error message={error?.data?.message || "No se pudo encontrar el usuario."} />;
    }

    return (
        <div className="detail-container">

            <Link to="/" className="back-link">
            <Button variant="secondary">
             volver al listado
            </Button>
            </Link>

            <div className="details-card">
                <div className="header">
                    <div className="avatar"> {user.name?.charAt(0)}</div>
                    <div className="info-section">
                    <h2>{user.name}</h2>
                    <p className="username"> @{user?.username}</p>
                    </div>
                </div>

                <hr clasName="divider"/>

                <div className="info-section">
                    <h3> Informacion de Contacto</h3>
                    <p><strong> Correo Electronico:</strong> {user?.email}</p>
                    <p><strong> Telefono:</strong> {user?.phone}</p>
                    <p><strong> Sitio web:</strong> {user?.website}</p>
                </div>

                <div className="info-section">
                    <h3> Empresa</h3>
                    <p><strong> Nombre:</strong> {user?.company?.name}</p>
                    <p><strong> Eslogan:</strong> <em> {user?.company?.catchPhrase}</em></p>
                </div>

                <div className="info-section">
                    <h3> Ubicacion</h3>
                    <p><strong> Ciudad:</strong> {user?.address?.city}</p>
                    <p><strong> Calle:</strong> {user?.address?.street} ({user?.address?.suite})</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;