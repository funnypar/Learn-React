import Question from "./Question";
import Bar from "./Bar";

export default function Questions({ questions, index, answer, dispatch }) {
    function clickHandler() {
        dispatch({ type: "next", payload: index + 1 });
    }

    return (
        <div className="questions">
            <Bar />
            <Question
                question={questions[index]}
                dispatch={dispatch}
                answer={answer}
            />
            <div className="info-wrapper">
                <div className="time">10:00</div>
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
