import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Items from "./components/Items";
import Status from "./components/Status";

function App() {
    const [database, setDatabase] = useState([]);

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
        setDatabase((database) => database.filter((data) => data[0].id !== id));
    }

    return (
        <div>
            <Header />
            <Form onData={dataHandler} />
            <Items datas={database} onDeleteData={deleteHandler} />
            <Status items={database.length} />
        </div>
    );
}

export default App;
