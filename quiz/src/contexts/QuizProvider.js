import supabase from "../services/supabase";

const { useContext, useReducer, useEffect } = require("react");
const { createContext } = require("react");

const quizContext = createContext();
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
function QuizProvider({ children }) {
    const [
        {
            question,
            status,
            index,
            score,
            answer,
            highscore,
            seconds,
            message,
            questions,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    useEffect(function () {
        async function fetchData() {
            try {
                let { data, error } = await supabase
                    .from("questions")
                    .select("*");
                dispatch({ type: "ok", payload: data });
            } catch (err) {
                dispatch({ type: "error", payload: err.message });
                console.log(err.message);
            }
        }
        fetchData();
    }, []);

    return (
        <quizContext.Provider
            value={{
                question,
                questions,
                status,
                index,
                score,
                answer,
                highscore,
                seconds,
                message,
                dispatch,
            }}
        >
            {children}
        </quizContext.Provider>
    );
}

function useQuiz() {
    const context = useContext(quizContext);
    if (context === undefined)
        throw new Error("Something went wrong in context!");
    return context;
}

export { QuizProvider, useQuiz };
