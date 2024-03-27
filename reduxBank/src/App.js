import CreateCustomer from "./features/customer/CreateCustomer";
import Customer from "./features/customer/CreateCustomer";
import AccountOperations from "./features/account/AccountOperations";
import BalanceDisplay from "./features/account/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
    const customer = useSelector((state) => state.customer.customerName);

    return (
        <div className="wrapper">
            {customer === "" ? (
                <>
                    <h1>🏦 The React-Redux Bank ⚛️</h1>
                    <CreateCustomer />
                </>
            ) : (
                <>
                    <Customer />
                    <AccountOperations />
                    <BalanceDisplay />
                </>
            )}
        </div>
    );
}

export default App;
