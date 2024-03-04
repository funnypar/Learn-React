import { useEffect, useReducer } from "react";
import "./App.css";
import Bar from "./components/Bar";
import Header from "./components/Header";
import Questions from "./components/Questions";

const initialState = { question: [], status: "loading" };
function reducer(state, action) {
    switch (action.type) {
        case "Error in data":
            return { ...state, status: "Error in data" };
        case "Ok":
            return { ...state, questions: action.payload, status: "Ok" };
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
                dispatch({ type: "Ok", payload: data });
            } catch (err) {
                dispatch({ type: "Error in data" });
                console.log(err.message);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="App">
            <Header />
            <Bar />
            <Questions />
        </div>
    );
}

export default App;
