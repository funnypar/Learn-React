import { useQuiz } from "../contexts/QuizProvider";

export default function Finish() {
    const { score, questions, highscore, dispatch } = useQuiz();

    let emoji = "";
    const percentage = Math.ceil((score * 100) / (questions.length * 10));
    if (percentage < 25) {
        emoji = "🤕";
    } else if (percentage >= 25 && percentage <= 50) {
        emoji = "🤔";
    } else if (percentage > 50 && percentage <= 75) {
        emoji = "😜";
    } else {
        emoji = "👑";
    }
    return (
        <div className="finish">
            <h2>
                {emoji} You scored {score} from {questions.length * 10} Points (
                {percentage}%) !
            </h2>
            <p>🏆 Highscore : {highscore}</p>
            <button onClick={() => dispatch({ type: "restart" })}>
                Restart ⚽
            </button>
        </div>
    );
}
