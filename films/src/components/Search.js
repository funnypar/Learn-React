import { useEffect, useRef } from "react";

export default function Search({ onSearch }) {
    const el = useRef(null);

    useEffect(() => el.current.focus(), []);

    return (
        <input
            type="text"
            placeholder="Search films..."
            onChange={(event) => onSearch(event.target.value)}
            className="search"
            ref={el}
        />
    );
}
