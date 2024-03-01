import { useEffect, useRef, useState } from "react";
import { useKey } from "./useKey";

export default function Search({ onSearch }) {
    const el = useRef(null);
    const [query, setQuery] = useState("");

    function changeHandler(event) {
        setQuery(event.target.value);
        onSearch(event.target.value);
    }

    useEffect(() => el.current.focus(), []);

    useKey("Enter", function () {
        if (document.activeElement === el.current) return;
        el.current.focus();
        onSearch("");
        setQuery("");
    });

    return (
        <input
            type="text"
            placeholder="Search films..."
            onChange={changeHandler}
            className="search"
            value={query}
            ref={el}
        />
    );
}
