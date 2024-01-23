export default function Idea({ children }) {
    return (
        <div>
            <label for="idea">{children}</label>
            <select name="idea" id="idea">
                <option value="0">That was not good 😖 (0% tip)</option>
                <option value="10">That was good 😄 (10% tip)</option>
                <option value="20">That was great 😍 (20% tip)</option>
            </select>
        </div>
    );
}
