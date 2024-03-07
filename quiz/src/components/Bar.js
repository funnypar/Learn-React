export default function Bar({ numQuestions, index, score }) {
    return (
        <div className="bar">
            <progress value={score} max={numQuestions * 10} />
            <div className="bar-infos">
                <p>
                    Question {index + 1}/{numQuestions}
                </p>
                <p>
                    {score}/{numQuestions * 10} Points
                </p>
            </div>
        </div>
    );
}
