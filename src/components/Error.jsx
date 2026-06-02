import react from "react";

const error = ({message = "Ha ocurrido un error al  cargar los datos "}) => {
    return (
        <div style={styles.container}>
            <h3 style={styles.title}>¡Ups! algo salio mal</h3>
            <p style={styles.message}>{message}</p>
        </div>
    );
};
const styles = {
    container: {
        border: "1px solid #ccc",
        backgroundColor: "#f8d7da",
        color: "#721c24",
        padding: "20px",
        borderRadius: "5px",
        maxWidth: "400px",
        margin: "20px auto",
    }
    ,title: {margin: "0 0 10px 0",
         fontWeight: "bold"}
    ,message: {margin: 0,
         fontSize: "16px"}
};
export default error;