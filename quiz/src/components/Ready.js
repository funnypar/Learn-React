import { useQuiz } from "../contexts/QuizProvider";

export default function Ready() {
    const { dispatch, questions } = useQuiz();
    return (
        <div className="ready">
            <div>
                <h2>Welcome to The Football Quiz!</h2>
                <h3>
                    {questions.length} Questions to test your Football mastery
                </h3>
            </div>
            <button onClick={() => dispatch({ type: "start" })}>
                Let's Start
            </button>
        </div>
    );
}
