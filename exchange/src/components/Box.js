import { useEffect } from "react";
import Options from "./Options";
import { useState } from "react";

export default function Box() {
    const [userInput, setUserInput] = useState("Output");
    const [outPut, setOutPut] = useState("");
    const [firstQuery, setFirstQuery] = useState("EUR");
    const [secondQuery, setSecondQuery] = useState("USD");

    useEffect(() => {
        if (outPut === 0) setOutPut("Enter A Value");
    }, [outPut]);

    function changeHandler(event) {
        if (isNaN(+event.target.value) !== true || outPut === 0) {
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
                    `https://api.frankfurter.app/latest?amount=${userInput}&from=${firstQuery}&to=${secondQuery}`
                );
                const data = await req.json();
                if (data.message === "not found") throw new Error(data.message);
                setOutPut(data.rates[secondQuery]);
            } catch (err) {
                console.log(err.message);
                setOutPut(err.message);
            }
        }
        fetchData();
    }, [userInput, firstQuery, secondQuery]);

    return (
        <div className="box">
            <div>
                <input
                    type="text"
                    onChange={changeHandler}
                    placeholder="Input a price..."
                />
                <Options
                    onChanged={(data) => setFirstQuery(data)}
                    firstVal={firstQuery}
                />
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

                <Options
                    onChanged={(data) => setSecondQuery(data)}
                    firstVal={secondQuery}
                />
            </div>
            <h3>{outPut}</h3>
        </div>
    );
}
