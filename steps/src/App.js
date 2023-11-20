import "./App.css";

function App() {
    return (
        <div>
            <Close />
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
    return <h2 className="texts">Step 1: Learn React 👑</h2>;
}

function Btn({ text }) {
    return <button className="btn">{text}</button>;
}

function Close() {
    return (
        <div className="close">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 "
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        </div>
    );
}
export default App;
