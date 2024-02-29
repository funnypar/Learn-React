import { useEffect, useRef, useState } from "react";

export default function Search({ onSearch }) {
    const el = useRef(null);
    const [query, setQuery] = useState("");

    function changeHandler(event) {
        setQuery(event.target.value);
        onSearch(event.target.value);
    }

    useEffect(() => el.current.focus(), []);

    useEffect(
        function () {
            function callback(e) {
                if (document.activeElement === el.current) return;
                if (e.code === "Enter") {
                    el.current.focus();
                    onSearch("");
                    setQuery("");
                }
            }

            document.addEventListener("keydown", callback);

            return document.addEventListener("keydown", callback);
        },
        [onSearch]
    );

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
