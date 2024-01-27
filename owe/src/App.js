import { useState } from "react";
import "./App.css";
import Friends from "./components/Friends";
import Owe from "./components/Owe";

function App() {
    const [data, setData] = useState("");
    const [showOwe, setShowOwe] = useState(false);

    function dataHandler(datas) {
        setData(datas);
        setShowOwe(true);
    }
    return (
        <div className="App">
            <Friends onBill={dataHandler} showOwe={!showOwe} />
            {showOwe ? <Owe person={data} /> : ""}
        </div>
    );
}

export default App;
