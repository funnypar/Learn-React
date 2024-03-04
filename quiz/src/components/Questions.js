import Question from "./Question";
import Bar from "./Bar";

export default function Questions({ questions }) {
    return (
        <div className="questions">
            <Bar />
            <Question question={questions[0]} />
            <div className="time">10:00</div>
        </div>
    );
}
