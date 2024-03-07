import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Ready from "./components/Ready";
import Error from "./components/Error";
import Questions from "./components/Questions";
import Finish from "./components/Finish";

const SEC_PER_QUESTION = 20;
const initialState = {
    question: [],
    status: "loading",
    index: 0,
    score: 0,
    answer: null,
    highscore: 0,
    seconds: null,
};
function reducer(state, action) {
    switch (action.type) {
        case "error":
            return { ...state, status: "error", message: action.payload };
        case "ok":
            return { ...state, questions: action.payload, status: "ok" };
        case "start":
            return {
                ...state,
                status: "start",
                seconds: state.questions.length * SEC_PER_QUESTION,
            };
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
        case "finish":
            return {
                ...state,
                status: "finish",
                highscore:
                    state.score > state.highscore
                        ? state.score
                        : state.highscore,
            };
        case "restart":
            return {
                ...state,
                status: "start",
                index: 0,
                score: 0,
                answer: null,
                seconds: state.questions.length * SEC_PER_QUESTION,
            };
        case "seconds":
            return {
                ...state,
                seconds: state.seconds--,
                status: state.seconds === 0 ? "finish" : state.status,
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
            {state.status === "ok" && (
                <Ready
                    dispatch={dispatch}
                    numQuestions={state.questions.length}
                />
            )}
            {state.status === "error" && <Error message={state.message} />}
            {state.status === "start" && (
                <Questions
                    questions={state.questions}
                    index={state.index}
                    dispatch={dispatch}
                    answer={state.answer}
                    score={state.score}
                    seconds={state.seconds}
                />
            )}
            {state.status === "finish" && (
                <Finish
                    score={state.score}
                    numQuestions={state.questions.length}
                    highscore={state.highscore}
                    dispatch={dispatch}
                />
            )}
        </div>
    );
}

export default App;
