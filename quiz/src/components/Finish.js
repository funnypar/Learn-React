export default function Finish({ score, numQuestions, highscore, dispatch }) {
    let emoji = "";
    const percentage = Math.ceil((score * 100) / (numQuestions * 10));
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
                {emoji} You scored {score} from {numQuestions * 10} Points (
                {percentage}%) !
            </h2>
            <p>🏆 Highscore : {highscore}</p>
            <button onClick={() => dispatch({ type: "restart" })}>
                Restart ⚽
            </button>
        </div>
    );
}
