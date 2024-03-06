export default function Question({ question, dispatch, answer }) {
    return (
        <div className="question">
            <h3>{question.question} </h3>
            <ul>
                {question.options.map((el, index) => (
                    <button
                        key={index}
                        onClick={(event) =>
                            dispatch({
                                type: "newAnswer",
                                payload: +event.target.value,
                            })
                        }
                        value={index}
                        disabled={answer !== null}
                        className={`btn ${
                            answer !== null
                                ? question.correctOption === index
                                    ? "correct"
                                    : ""
                                : ""
                        } ${
                            answer !== null
                                ? +answer === index
                                    ? "select"
                                    : ""
                                : ""
                        }`}
                    >
                        {el}
                    </button>
                ))}
            </ul>
        </div>
    );
}
