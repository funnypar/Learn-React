export default function Bill({ onVal }) {
    return (
        <div>
            <label htmlFor="bill">How much is your bill ? </label>
            <input
                id="bill"
                type="number"
                placeholder="100"
                onChange={(event) => onVal(event.target.value)}
            />
        </div>
    );
}
