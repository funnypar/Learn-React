import "./App.css";

function App() {
    return (
        <div>
            <Box />
        </div>
    );
}

function Box() {
    return (
        <div className="box">
            <Steps />
            <Texts />
            <div className="btn-container">
                <Btn text={"Next"} />
                <Btn text={"Previous"} />
            </div>
        </div>
    );
}

function Steps() {
    return (
        <ul className="steps">
            <li className="active-step">
                <a href="#">1</a>
            </li>
            <li>
                <a href="#">2</a>
            </li>
            <li>
                <a href="#">3</a>
            </li>
        </ul>
    );
}

function Texts() {
    return <h3 className="texts">Step 1: Learn React 👑</h3>;
}

function Btn({ text }) {
    return <button className="btn">{text}</button>;
}

function Close() {
    return <div></div>;
}
export default App;
