import { applyMiddleware, combineReducers, createStore } from "redux";
import customerSlice from "./features/customer/customerSlice";
import account from "./features/account/accountSlice";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    customer: customerSlice,
    account: account,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
