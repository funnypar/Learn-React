import { useState } from "react";

export default function Options({ onChanged, firstVal }) {
    const [userVal, setUserVal] = useState(firstVal);

    function changeHandler(event) {
        setUserVal(event.target.value);
        onChanged(event.target.value);
    }

    return (
        <select onChange={changeHandler} value={userVal}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
        </select>
    );
}
