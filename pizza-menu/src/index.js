// import react
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Datas
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];
// App component
function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    return (
        <div className="menu">
            <h2>Our menu</h2>
            {pizzas && (
                <div className="pizzas">
                    {pizzaData.map((pizza) => (
                        <Pizza data={pizza} key={pizza.name} />
                    ))}
                </div>
            )}
        </div>
    );
}

function Footer() {
    const openHour = 1;
    const closeHour = 10;
    const nowDate = new Date().getHours();
    const isOpen = nowDate >= openHour && nowDate <= closeHour;

    return (
        <footer className="footer">
            <div className="order">
                {isOpen ? (
                    <p>Now is {nowDate}:00 and We're currently open!</p>
                ) : (
                    <p>Now is {nowDate}:00 and we're colse!</p>
                )}
                {isOpen ? <button className="btn">Order now!</button> : null}
            </div>
        </footer>
    );
}

function Pizza(props) {
    return (
        <div className={`pizza ${props.data.soldOut ? "sold-out" : ""}`}>
            <img src={props.data.photoName} alt={props.data.name} />
            <h3>{props.data.name}</h3>
            <p>{props.data.ingredients}</p>
            <span>{props.data.price}</span>
        </div>
    );
}
// render root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
