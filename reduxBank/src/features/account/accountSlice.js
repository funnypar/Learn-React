const initialState = { balance: 0, loan: 0, isLoading: false, reason: "" };

export default function account(state = initialState, action) {
    switch (action.type) {
        case "account/loading":
            return {
                ...state,
                isLoading: true,
            };
        case "account/deposit":
            return {
                ...state,
                balance: state.balance + action.payload,
                isLoading: false,
            };
        case "account/withdraw":
            return {
                ...state,
                balance:
                    state.balance >= action.payload
                        ? state.balance - action.payload
                        : state.balance,
                isLoading: false,
            };
        case "account/getLoan":
            return {
                ...state,
                balance: state.balance + action.payload.amount,

                loan: state.loan + action.payload.amount,
                isLoading: false,
                reason: action.payload.reason,
            };

        case "account/payLoan":
            return {
                ...state,
                balance:
                    state.balance >= state.loan
                        ? state.balance - state.loan
                        : state.balance,
                loan: 0,
                isLoading: false,
                reason: "",
            };

        default:
            return state;
    }
}

export function deposit(amount, currency) {
    if (currency === "USD") return { type: "account/deposit", payload: amount };

    return async (dispatch, getState) => {
        dispatch({ type: "account/loading" });
        const req = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
        );
        const data = await req.json();
        dispatch({ type: "account/deposit", payload: data.rates.USD });
    };
}
export function withdraw(amount) {
    return {
        type: "account/withdraw",
        payload: amount,
    };
}
export function getLoan(amount, reason) {
    return {
        type: "account/getLoan",
        payload: { amount: amount, reason: reason },
    };
}
export function payLoan() {
    return {
        type: "account/payLoan",
    };
}
