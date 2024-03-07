import { useEffect } from "react";
import Question from "./Question";
import Bar from "./Bar";

export default function Questions({
    questions,
    index,
    answer,
    dispatch,
    score,
    seconds,
}) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    function clickHandler() {
        if (index === 14) {
            dispatch({ type: "finish" });
        } else {
            dispatch({ type: "next", payload: index + 1 });
        }
    }

    useEffect(() => {
        const id = setInterval(function () {
            dispatch({ type: "seconds" });
        }, 1000);
        return () => clearInterval(id);
    }, [dispatch]);

    return (
        <div className="questions">
            <Bar numQuestions={questions.length} index={index} score={score} />
            <Question
                question={questions[index]}
                dispatch={dispatch}
                answer={answer}
            />
            <div className="info-wrapper">
                <div className="time">
                    {min < 10 ? "0" : ""}
                    {min}:{sec < 10 ? "0" : ""}
                    {sec}
                </div>
                {answer !== null ? (
                    <button className="next" onClick={clickHandler}>
                        Next
                    </button>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
