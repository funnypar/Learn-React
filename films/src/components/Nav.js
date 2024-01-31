import Logo from "./Logo";
import NavResult from "./NavResult";
import Search from "./Search";

export default function Nav({ filmsNumber }) {
    return (
        <nav>
            <Logo />
            <Search />
            <NavResult filmsNumber={filmsNumber} />
        </nav>
    );
}
