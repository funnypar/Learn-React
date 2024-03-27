const initialState = { balance: 0, reason: "" };

export default function account(state = initialState, action) {
    switch (action.type) {
        case "account/deposit":
            return {
                ...state,
                balance:
                    state.balance > action.payload.amount
                        ? state.balance - action.payload.amount
                        : state.balance,
                reason: action.payload.reason,
            };

        default:
            return state;
    }
}

export function deposit({ amount }) {
    return { type: "account/deposit", payload: amount };
}
