import { useState } from "react";
import "./App.css";

const DATABASE = [
    {
        text: "Learn React 👑",
    },
    {
        text: "Apply For Job ⛺",
    },
    {
        text: "Earn Money 💰",
    },
];

function App() {
    const [close, setClose] = useState(true);

    return (
        <div>
            <div className="close" onClick={() => setClose(!close)}>
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
            {close && <Box />}
        </div>
    );
}

function Box() {
    const [step, setStep] = useState(1);
    // Handlers
    function nextHandler() {
        step < 3 && setStep((curStep) => curStep + 1);
    }
    function prevHandler() {
        step > 1 && setStep((curStep) => curStep - 1);
    }

    return (
        <div className="box">
            <Steps step={step} />
            <Texts step={step} />
            <div className="btn-container">
                <button className="btn" onClick={prevHandler}>
                    Previous
                </button>
                <button className="btn" onClick={nextHandler}>
                    Next
                </button>
            </div>
        </div>
    );
}

function Steps({ step }) {
    return (
        <ul className="steps">
            <li className={step >= 1 ? `active-step` : ""}>
                <a href="#">1</a>
            </li>
            <li className={step >= 2 ? `active-step` : ""}>
                <a href="#">2</a>
            </li>
            <li className={step >= 3 ? `active-step` : ""}>
                <a href="#">3</a>
            </li>
        </ul>
    );
}

function Texts({ step }) {
    return (
        <h2 className="texts">{`Step ${step} : ${DATABASE[step - 1].text}`}</h2>
    );
}

export default App;
