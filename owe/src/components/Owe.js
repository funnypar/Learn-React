import Btn from "./Btn";

export default function owe() {
    return (
        <div className="bill-wrapper">
            <h2>split a bill with sara</h2>
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
                    <label htmlFor="friendexpense">💸 Friend Expense </label>
                    <input
                        type="number"
                        name="friendexpense"
                        id="friendexpense"
                        min={"1"}
                    />
                </div>
                <div>
                    <label htmlFor="friendexpense">
                        🤑 Who is paying the bill ?{" "}
                    </label>
                    <select>
                        <option>You</option>
                        <option>Friend</option>
                    </select>
                </div>
                <Btn classname={"btn-split btn"}>Split Bill</Btn>
            </form>
        </div>
    );
}
