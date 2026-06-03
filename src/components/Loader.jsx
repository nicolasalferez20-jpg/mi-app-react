import React from "react";

const Loader = ({ message = "cargando informacion..."}) => {
    return (
        <div className="flex flex-col items-center justify-center p-5 w-full">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-2.5 text-gray-600 text-sm font-medium">{message}</p>
        </div>
    );
};

export default Loader;