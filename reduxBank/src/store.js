import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./features/customer/customerSlice";
import account from "./features/account/accountSlice";

const store = configureStore({
    reducer: { customer: customerSlice, account: account },
});

export default store;
