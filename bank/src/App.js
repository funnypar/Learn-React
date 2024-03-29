import { useReducer } from "react";
import "./App.css";
import Box from "./components/Box";

const initialState = { status: "ready", balance: 0, loan: 0, content: "" };
function reducer(state, action) {
    switch (action.type) {
        case "ready":
            return { ...state };
        case "mouseEnter":
            return { ...state, content: "active" };
        case "mouseOut":
            return { ...state, content: "disable" };
        case "start":
            return { ...state, status: "start", balance: 500 };
        case "value":
            return { ...state, value: action.payload };
        case "withdraw":
            return {
                ...state,
                balance:
                    state.value < state.balance
                        ? state.balance - state.value
                        : state.balance,
                value: "",
            };
        case "deposit":
            return {
                ...state,
                balance: state.balance + state.value,
                value: "",
            };
        case "reqLoan":
            return {
                ...state,
                balance: state.balance + 5000,
                loan: 5000,
                isLoan: false,
            };

        case "payLoan":
            return {
                ...state,
                balance:
                    state.balance >= 5000
                        ? state.balance - 5000
                        : state.balance,
                isLoan: true,
                loan: 0,
            };
        case "close":
            return { ...initialState, status: "ready" };
        default:
            return "Action Unknown";
    }
}
function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="App">
            <h1>🏦 Bank</h1>
            <Box status={state.status} dispatch={dispatch} state={state} />
        </div>
    );
}

export default App;
