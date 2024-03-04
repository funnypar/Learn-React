import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Ready from "./components/Ready";
import { Error } from "./components/Error";

const initialState = { question: [], status: "loading" };
function reducer(state, action) {
    switch (action.type) {
        case "error":
            return { ...state, status: "error", message: action.payload };
        case "ok":
            return { ...state, questions: action.payload, status: "ok" };
        default:
            throw new Error("Action unknown");
    }
}
function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(function () {
        async function fetchData() {
            try {
                const req = await fetch("http://localhost:9000/questions");
                if (!req) throw new Error("Data is not arrived");
                const data = await req.json();
                dispatch({ type: "ok", payload: data });
            } catch (err) {
                dispatch({ type: "error", payload: err.message });
                console.log(err.message);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="App">
            <Header />
            {state.status === "loading" && <Loader />}
            {state.status === "ok" && <Ready />}
            {state.status === "error" && <Error message={state.message} />}
        </div>
    );
}

export default App;
