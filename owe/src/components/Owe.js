import { useState } from "react";

export default function Owe({ person, onNewPersonData, onShowOwe }) {
    const [bill, setBill] = useState("");
    const [yourExpense, setYourExpense] = useState("");
    const [who, setWho] = useState(1);
    const friendExpense = bill - yourExpense;

    function submitHandler(event) {
        event.preventDefault();
        if (+who === 1) {
            onNewPersonData({
                ...person,
                balance: person.balance + friendExpense,
            });
        } else if (+who === 0) {
            onNewPersonData({
                ...person,
                balance: person.balance - friendExpense,
            });
        }
        onShowOwe();
    }
    return (
        <div className="bill-wrapper">
            <h2>split a bill with {person.name}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="bill">💰 Bill Value </label>
                    <input
                        type="number"
                        name="bill"
                        id="bill"
                        min={"1"}
                        value={bill}
                        onChange={(event) => setBill(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="yourexpense">💳 Your Expense </label>
                    <input
                        type="number"
                        name="yourexpense"
                        id="yourexpense"
                        min={"1"}
                        max={bill}
                        value={yourExpense}
                        onChange={(event) => setYourExpense(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="friendexpense">
                        💸 {person.name}'s Expense{" "}
                    </label>
                    <input
                        type="text"
                        name="friendexpense"
                        id="friendexpense"
                        value={bill - yourExpense}
                        disabled
                    />
                </div>
                <div>
                    <label htmlFor="friendexpense">
                        🤑 Who is paying the bill ?{" "}
                    </label>
                    <select onChange={(event) => setWho(event.target.value)}>
                        <option value={1}>You</option>
                        <option value={0}>{person.name}</option>
                    </select>
                </div>
                <button className={"btn-split btn"}>Split Bill</button>
            </form>
        </div>
    );
}
