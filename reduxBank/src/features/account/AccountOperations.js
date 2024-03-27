import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, getLoan, payLoan, withdraw } from "./accountSlice";

function AccountOperations() {
    const [depositAmount, setDepositAmount] = useState("");
    const [withdrawalAmount, setWithdrawalAmount] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [loanPurpose, setLoanPurpose] = useState("");
    const [currency, setCurrency] = useState("USD");
    const dispatch = useDispatch();
    const loan = useSelector((state) => state.account.loan);

    function handleDeposit() {
        dispatch(deposit(depositAmount, currency));
        setDepositAmount("");
        setCurrency("USD");
    }

    function handleWithdrawal() {
        dispatch(withdraw(withdrawalAmount));
        setWithdrawalAmount("");
    }

    function handleRequestLoan() {
        dispatch(getLoan(loanAmount, loanPurpose));
        setLoanAmount("");
        setLoanPurpose("");
    }

    function handlePayLoan() {
        dispatch(payLoan());
    }

    return (
        <div>
            <h2>Your account operations</h2>
            <div className="inputs">
                <div>
                    <label>Deposit</label>
                    <input
                        type="number"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(+e.target.value)}
                    />
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <option value="USD">US Dollar</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">British Pound</option>
                    </select>

                    <button className="btn-account" onClick={handleDeposit}>
                        Deposit {depositAmount}
                    </button>
                </div>

                <div>
                    <label>Withdraw</label>
                    <input
                        type="number"
                        value={withdrawalAmount}
                        onChange={(e) => setWithdrawalAmount(+e.target.value)}
                    />
                    <button className="btn-account" onClick={handleWithdrawal}>
                        Withdraw {withdrawalAmount}
                    </button>
                </div>

                <div>
                    <label>Request loan</label>
                    <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(+e.target.value)}
                        placeholder="Loan amount"
                    />
                    <input
                        value={loanPurpose}
                        onChange={(e) => setLoanPurpose(e.target.value)}
                        placeholder="Loan purpose"
                    />
                    <button
                        className="btn-account"
                        onClick={handleRequestLoan}
                        disabled={loan >= 1000}
                    >
                        Request loan
                    </button>
                </div>

                <div>
                    <span>Pay back ${loan}</span>
                    <button className="btn-account" onClick={handlePayLoan}>
                        Pay loan
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AccountOperations;
