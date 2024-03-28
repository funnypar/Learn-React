import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customerName: "",
    nationalId: null,
    createdAt: "",
};

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        created: {
            prepare(customerName, nationalId) {
                return {
                    payload: {
                        customerName,
                        nationalId,
                        createdAt: new Date().toISOString(),
                    },
                };
            },
            reducer(state, action) {
                state.customerName = action.payload.customerName;
                state.nationalId = action.payload.nationalId;
                state.createdAt = action.payload.createdAt;
            },
        },
    },
});
export const { created } = customerSlice.actions;
export default customerSlice.reducer;
// export default function customerSlice(state = initialState, action) {
//     switch (action.type) {
//         case "customer/created":
//             return {
//                 ...state,
//                 customerName: action.payload.customerName,
//                 nationalId: action.payload.nationalId,
//                 createdAt: action.payload.createdAt,
//             };
//         default:
//             return state;
//     }
// }

// export function createCustomer({ customerName, nationalId }) {
//     return {
//         type: "customer/created",
//         payload: {
//             customerName,
//             nationalId,
//             createdAt: new Date().toISOString(),
//         },
//     };
// }
