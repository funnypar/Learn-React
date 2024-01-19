import { useState } from "react";
import "./App.css";

function App() {
    const [database,setDatabase] = useState([]);

    function dataHandler(datas) {
        setDatabase([...database, datas]);
    }
    function deleteHandler(id) {
        // ------------ my way -------------------
        // const newDatabase = database.filter(el => {
        //     return el[0].id != id
        // });
        // setDatabase([...newDatabase])

        // ----------- Jonas way ----------------
        setDatabase(database => database.filter(data => data[0].id !== id));
    }

    return (
        <div>
            <Header />
            <Form onData={dataHandler}/>
            <Items datas={database} onDeleteData={deleteHandler}/>
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
        props.onData([{id: Math.random(), numbers: elements[0].value, title: elements[1].value}]);
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
function Items(props) {
    function doneHandler(event) {
        // console.log(event.target.parentElement);
        event.target.parentElement.querySelector("p").classList.toggle('done');
    }

    return (
        <div className="list">
            <div className="items-wrapper">
                {props.datas.map(el => {
                    return <div key={el[0].id}>
                        <input type="checkbox" onClick={doneHandler}/>
                        <p>
                            <span>{el[0].numbers} {el[0].title}</span>
                        </p>
                        <button className="x-sign" onClick={() => props.onDeleteData(el[0].id)}>&#10005;</button>
                  </div>
                })}
            </div>
        </div>
    );
}
function Status() {
    return (
        <div className="status">
            You have X items on your list, and you already packed X (%X)
        </div>
    );
}

export default App;
