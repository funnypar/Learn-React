import { combineReducers, createStore } from "redux";
import customerSlice from "./features/customer/customerSlice";
import account from "./features/account/accountSlice";

const rootReducer = combineReducers({
    customer: customerSlice,
    account: account,
});
const store = createStore(rootReducer);

export default store;
