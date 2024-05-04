import { useState } from "react";
import "./App.css";
import Friends from "./components/Friends";
import Owe from "./components/Owe";

function App() {
    const [DATABASE, setDATABASE] = useState([
        { id: "1p", name: "atashi", img: "media/atashi.webp", balance: 0 },
        { id: "2p", name: "mat", img: "media/mat.webp", balance: 0 },
        { id: "3p", name: "nika", img: "media/nika.webp", balance: 0 },
    ]);
    const [data, setData] = useState("");
    const [showOwe, setShowOwe] = useState(false);

    function dataHandler(datas) {
        setData(datas);
        setShowOwe(true);
    }

    function newPersonHandler(data) {
        setDATABASE((database) => [...database, data]);
    }

    function newPersonDataHandler(newPerson) {
        setDATABASE((database) =>
            database.map((el) =>
                el.id === newPerson.id
                    ? { ...el, balance: el.balance + newPerson.balance }
                    : el
            )
        );
    }

    return (
        <div className="App">
            <h1>OWE MANAGMENT</h1>
            <div className="app-wrapper">
                <Friends
                    onBill={dataHandler}
                    showOwe={!showOwe}
                    database={DATABASE}
                    onNewPerson={newPersonHandler}
                />
                {showOwe ? (
                    <Owe
                        person={data}
                        onNewPersonData={newPersonDataHandler}
                        onShowOwe={() => setShowOwe(false)}
                    />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default App;
