import Actions from "./Actions";
import Balance from "./Balance";
import Loan from "./Loan";

export default function Box({ status, dispatch, state }) {
    return (
        <div className="box">
            {status === "ready" ? (
                <button
                    className="ready-btn"
                    onClick={() => dispatch({ type: "start" })}
                >
                    Open Account
                </button>
            ) : (
                ""
            )}
            {status === "start" ? (
                <>
                    <Balance balance={state.balance} loan={state.loan} />
                    <Actions dispatch={dispatch} value={state.value} />
                    <Loan dispatch={dispatch} loan={state.isLoan} />
                    <button
                        className="btn-close"
                        onClick={() => dispatch({ type: "close" })}
                    >
                        Close Account
                    </button>
                </>
            ) : (
                ""
            )}
        </div>
    );
}
