import { useSelector } from "react-redux";
function Customer() {
    const customer = useSelector((state) => state.customer.customerName);

    return (
        <h2>
            👋 Welcome, <span>{customer}</span>
        </h2>
    );
}

export default Customer;
