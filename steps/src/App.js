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
    return <h2></h2>;
}

function Btn() {
    return <button></button>;
}

function Close() {
    return <div></div>;
}
export default App;
