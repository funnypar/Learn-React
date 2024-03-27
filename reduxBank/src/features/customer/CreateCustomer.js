import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function Customer() {
    const [customerName, setCustomerName] = useState("");
    const [nationalId, setNationalId] = useState("");
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(createCustomer({ customerName, nationalId }));
        setCustomerName("");
        setNationalId("");
    }

    return (
        <div className="wrapper">
            <h2>Create new customer</h2>
            <div className="inputs ">
                <div>
                    <label>Customer full name</label>
                    <input
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>National ID</label>
                    <input
                        value={nationalId}
                        onChange={(e) => setNationalId(e.target.value)}
                        required
                    />
                </div>
                <button className="btn-createAccount" onClick={handleClick}>
                    Create new customer
                </button>
            </div>
        </div>
    );
}

export default Customer;
