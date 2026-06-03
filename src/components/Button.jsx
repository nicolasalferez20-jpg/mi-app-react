import React from 'react';

// Manejo dinámico de estilos según la variante 
const Button = ({ onClick, children, variant = "primary", disabled = false, type = "button" }) => {

    const getClasses = () => {
       const base =
      "px-3 py-2 rounded text-sm font-semibold text-white transition-colors duration-300 cursor-pointer";

        if (variant === 'primary') {
            return `${base} bg-blue-600 hover:bg-blue-700`;
        }
        if (variant === 'danger') {
            return `${base} bg-red-600 hover:bg-red-700`;
        }
        if (variant === 'secondary') {
            return `${base} bg-slate-500 hover:bg-slate-600`;
        }
        return base;
    };
    return (
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={getClasses()}
            >
                {children}
            </button>
        ); 
    };

export default Button;