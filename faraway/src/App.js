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
    return <div></div>;
}
function Status() {
    return <div></div>;
}

export default App;
