import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`);
        setQuery("");
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                value={query}
                placeholder="Enter an ID"
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    );
};

export default SearchOrder;
