export default function Question({ question }) {
    return (
        <div className="question">
            <h3>{question.question} </h3>
            <ul>
                {question.options.map((el, index) => (
                    <li key={index}>{el}</li>
                ))}
            </ul>
        </div>
    );
}
