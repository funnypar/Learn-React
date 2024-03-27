const initialState = {
    customerName: "",
    nationalId: null,
    createdAt: "",
};

export default function customerSlice(state = initialState, action) {
    switch (action.type) {
        case "customer/created":
            return {
                ...state,
                customerName: action.payload.customerName,
                nationalId: action.payload.nationalId,
                createdAt: action.payload.createdAt,
            };
        default:
            return state;
    }
}

export function createCustomer({ customerName, nationalId }) {
    return {
        type: "customer/created",
        payload: {
            customerName,
            nationalId,
            createdAt: new Date().toISOString(),
        },
    };
}
