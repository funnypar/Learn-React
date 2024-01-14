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
            <Items datas={database}/>
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
function Items({datas}) {
    return (
        <div className="list">
            <div className="items-wrapper">
                {datas.map(el => {
                    return <div key={el[0].id}>
                        <h4>
                            {el[0].numbers} {el[0].title}<button className="x-sign">&#10005;</button>
                        </h4>
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
