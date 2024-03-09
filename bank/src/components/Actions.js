export default function Actions({ value, dispatch }) {
    return (
        <div className="actions">
            <input
                type="text"
                placeholder=" Enter A Value ..."
                value={value}
                required
                onChange={(e) =>
                    dispatch({ type: "value", payload: +e.target.value })
                }
            />
            <div>
                <button
                    className="btn"
                    disabled={!value}
                    onClick={() => dispatch({ type: "withdraw" })}
                >
                    Withdraw
                </button>
                <button
                    className="btn"
                    disabled={!value}
                    onClick={() => dispatch({ type: "deposit" })}
                >
                    Deposit
                </button>
            </div>
        </div>
    );
}
