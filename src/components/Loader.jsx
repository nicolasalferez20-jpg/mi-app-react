import react from "react";

const loader = ({ message = "cargando informacion..."}) => {
    return (
        <div style={styles.container}>
            <div style={styles.spinner}></div>
            <p style={styles.text}>{message}</p>
        </div>
    );
};
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        width: "100%",
    },
    spiner: {
        width: "50px",
        height: "50px",
        border: "6px solid #ccc",
        borderTop: "6px solid #333",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
    },
    text: {
        marginTop: "10px",
        color: "#333",
        fontSize: "16px",
        frontWeight: "500",
    }
};
export default loader;