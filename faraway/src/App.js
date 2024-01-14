import { useState } from "react";
import "./App.css";

function App() {
    const [database,setDatabase] = useState([]);

    function dataHandler(datas) {
        setDatabase([...database, datas]);
    }

    return (
        <div>
            <Header />
            <Form onData={dataHandler}/>
            <Items />
            <Status />
        </div>
    );
}

function Header() {
    return (
        <div className="header">
            <h1>🌵 Far Away 👜</h1>
        </div>
    );
}
function Form(props) {
    function formSubmit(event) {
        event.preventDefault();
        const elements = event.currentTarget.elements;
        props.onData([{id: Math.random()},{numbers: elements[0].value}, {title: elements[1].value}]);
    }

    return (
        <div className="form">
            <h3>What do you need for your 🌴 trip ?</h3>
            <form onSubmit={formSubmit}>
                <input type="number" min={1} placeholder="1" required/>
                <input type="text" placeholder="Add item..." required/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
function Items() {
    return <div className="list">List</div>;
}
function Status() {
    return (
        <div className="status">
            You have X items on your list, and you already packed X (%X)
        </div>
    );
}

export default App;
