import { useQuiz } from "../contexts/QuizProvider";

export default function Error() {
    const { message } = useQuiz();

    return (
        <div className="error">
            <h2>🧯 {message}</h2>
        </div>
    );
}
