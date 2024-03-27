import { combineReducers, createStore } from "redux";
import customerSlice from "./features/customer/customerSlice";

const rootReducer = combineReducers({ customer: customerSlice });
const store = createStore(rootReducer);

export default store;
