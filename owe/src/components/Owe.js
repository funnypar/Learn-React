import Btn from "./Btn";

export default function owe({ person }) {
    return (
        <div className="bill-wrapper">
            <h2>split a bill with {person.name}</h2>
            <form>
                <div>
                    <label htmlFor="bill">💰 Bill Value </label>
                    <input type="number" name="bill" id="bill" min={"1"} />
                </div>
                <div>
                    <label htmlFor="yourexpense">💳 Your Expense </label>
                    <input
                        type="number"
                        name="yourexpense"
                        id="yourexpense"
                        min={"1"}
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
                        disabled
                    />
                </div>
                <div>
                    <label htmlFor="friendexpense">
                        🤑 Who is paying the bill ?{" "}
                    </label>
                    <select>
                        <option>You</option>
                        <option>{person.name}</option>
                    </select>
                </div>
                <Btn classname={"btn-split btn"}>Split Bill</Btn>
            </form>
        </div>
    );
}
