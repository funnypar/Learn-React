import Balance from "./Balance";

export default function Box({ status, dispatch, state }) {
    return (
        <div className="box">
            {status === "ready" ? (
                <button onClick={() => dispatch({ type: "start" })}>
                    Open Account
                </button>
            ) : (
                ""
            )}
            {status === "start" ? (
                <Balance balance={state.balance} loan={state.loan} />
            ) : (
                ""
            )}
        </div>
    );
}
