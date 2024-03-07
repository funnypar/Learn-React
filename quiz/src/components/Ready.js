export default function Ready({ dispatch, numQuestions }) {
    return (
        <div className="ready">
            <div>
                <h2>Welcome to The Football Quiz!</h2>
                <h3>{numQuestions} Questions to test your Football mastery</h3>
            </div>
            <button onClick={() => dispatch({ type: "start" })}>
                Let's Start
            </button>
        </div>
    );
}
