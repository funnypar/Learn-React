// import react
import React from "react";
import ReactDOM from "react-dom/client";
// App component
function App() {
    return <h1>Hello from React :) </h1>;
}
// render root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
