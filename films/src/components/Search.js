import { useState } from "react";

export default function Search() {
    const [query, setQuery] = useState("");

    return (
        <input
            type="text"
            placeholder="Search films..."
            onChange={(event) => setQuery(event.target.value)}
        />
    );
}
