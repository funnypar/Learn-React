import "./App.css";

function App() {
    return (
        <div>
            <Header />
            <Form />
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
function Form() {
    return <div className="form">What do you need for your 🌴 trip ?</div>;
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
