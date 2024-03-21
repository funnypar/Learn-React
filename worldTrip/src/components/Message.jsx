/* eslint-disable react/prop-types */
export default function Message({ message }) {
    return (
        <h3 style={{ color: "white", width: "60%", textAlign: "center" }}>
            {message}
        </h3>
    );
}
