export default function Idea({ idea, onIdea, children }) {
    return (
        <div>
            <label htmlFor="idea">{children}</label>
            <select
                name="idea"
                id="idea"
                onChange={(event) => onIdea(event.target.value)}
                value={idea}
            >
                <option value="0">That was not good 😖 (0% tip)</option>
                <option value="10">That was good 😄 (10% tip)</option>
                <option value="20">That was great 😍 (20% tip)</option>
            </select>
        </div>
    );
}
