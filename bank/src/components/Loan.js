export default function Loan({ dispatch, loan }) {
    return (
        <div className="loan">
            <button
                className="btn"
                onClick={() =>
                    loan !== false ? dispatch({ type: "reqLoan" }) : ""
                }
            >
                Request a loan of 5000$
            </button>
            <button
                className="btn"
                onClick={() => dispatch({ type: "payLoan" })}
            >
                Pay Loan
            </button>
        </div>
    );
}
