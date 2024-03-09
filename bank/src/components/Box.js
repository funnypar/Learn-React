import Actions from "./Actions";
import Balance from "./Balance";

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
                </>
            ) : (
                ""
            )}
        </div>
    );
}
