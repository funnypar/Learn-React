import Logo from "./Logo";
import NavResult from "./NavResult";
import Search from "./Search";

export default function Nav({ filmsNumber, onSearch }) {
    return (
        <nav>
            <Logo />
            <Search onSearch={(data) => onSearch(data)} />
            <NavResult filmsNumber={filmsNumber} />
        </nav>
    );
}
