import { useEffect } from "react";
import Options from "./Options";
import { useState } from "react";

export default function Box() {
    const [userInput, setUserInput] = useState("Output");
    const [outPut, setOutPut] = useState("");

    function changeHandler(event) {
        if (isNaN(+event.target.value) !== true) {
            event.target.value === ""
                ? setOutPut("Enter A Value")
                : setUserInput(event.target.value);
        } else {
            setOutPut("Please Enter A Number");
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const req = await fetch(
                    `https://api.frankfurter.app/latest?amount=${userInput}&from=EUR&to=USD`
                );
                const data = await req.json();
                if (data.message === "not found") throw new Error(data.message);
                setOutPut(data.rates["USD"]);
            } catch (err) {
                console.log(err.message);
                setOutPut(err.message);
            }
        }
        fetchData();
    }, [userInput]);

    return (
        <div className="box">
            <div>
                <input type="text" onChange={changeHandler} />
                <Options />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                </svg>

                <Options />
            </div>
            <h3>{outPut}</h3>
        </div>
    );
}
