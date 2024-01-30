import "./App.css";
import List from "./components/List";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="App">
            <Nav />
            <div className="wrapper">
                <List />
                <List />
            </div>
        </div>
    );
}

export default App;
