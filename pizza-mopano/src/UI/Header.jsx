import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";

const Header = () => {
    return (
        <header>
            <Link to="/">Pizza Mopano Co.</Link>
            <SearchOrder />
            <p>Parsa</p>
        </header>
    );
};

export default Header;
