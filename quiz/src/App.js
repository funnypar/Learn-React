import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Ready from "./components/Ready";
import Error from "./components/Error";
import Questions from "./components/Questions";

const initialState = {
    question: [],
    status: "loading",
    index: 0,
    score: 0,
    answer: null,
};
function reducer(state, action) {
    switch (action.type) {
        case "error":
            return { ...state, status: "error", message: action.payload };
        case "ok":
            return { ...state, questions: action.payload, status: "ok" };
        case "start":
            return { ...state, status: "start" };
        case "next":
            return { ...state, index: action.payload, answer: null };
        case "newAnswer":
            const lastScore = state.score;
            return {
                ...state,
                answer: action.payload,
                score:
                    action.payload ===
                    state.questions[state.index].correctOption
                        ? lastScore + 10
                        : lastScore,
            };
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
            {state.status === "ok" && <Ready dispatch={dispatch} />}
            {state.status === "error" && <Error message={state.message} />}
            {state.status === "start" && (
                <Questions
                    questions={state.questions}
                    index={state.index}
                    dispatch={dispatch}
                    answer={state.answer}
                />
            )}
        </div>
    );
}

export default App;
