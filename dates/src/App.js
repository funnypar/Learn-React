import { useState } from "react";
import "./App.css";

function App() {
    const [dateOne, setDateOne] = useState("");
    const [dateTwo, setDateTwo] = useState("");

    const dateOneHandler = (event) => {
        setDateOne(event.target.value);
    };
    const dateTwoHandler = (event) => {
        setDateTwo(event.target.value);
    };

    return (
        <div className="app">
            <h2>Day Counter</h2>
            <div>
                <label>First Data :</label>
                <input type="date" onChange={dateOneHandler} />
                <label>Second Data :</label>
                <input type="date" onChange={dateTwoHandler} />
            </div>
            <Result dates={[dateOne, dateTwo]} />
        </div>
    );
}

function Result(props) {
    let dateOne = new Date(props.dates[0]);
    let dateTwo = new Date(props.dates[1]);
    let status = true;

    const diffTime = Math.abs(dateTwo - dateOne);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (+props.dates[0] == 0 || +props.dates[1] == 0) status = false;

    return (
        <h3>
            {status
                ? `The Difference between 2 Dates is :  ${diffDays}`
                : `Please Insert Both Of Dates`}
        </h3>
    );
}
export default App;
