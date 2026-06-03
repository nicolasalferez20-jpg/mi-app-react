import React from "react";

const Error = ({message = "Ha ocurrido un error al  cargar los datos "}) => {
    return (
        <div className="border border-gray-300 bg-red-100 text-red-900 p-5 rounded max-w-md mx-auto my-5">
            <h3 className="mb-2.5 font-bold ">¡Ups! algo salio mal</h3>
            <p className="m-0 text-base ">{message}</p>
        </div>
    );
};

export default Error;