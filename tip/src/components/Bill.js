export default function Bill({ value, onVal }) {
    return (
        <div>
            <label htmlFor="bill">How much is your bill ? </label>
            <input
                id="bill"
                type="number"
                placeholder="100"
                value={value}
                onChange={(event) => onVal(event.target.value)}
            />
        </div>
    );
}
