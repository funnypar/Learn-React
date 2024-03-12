import styles from "./Nav.module.css";
import { NavLink, Link } from "react-router-dom";
export default function Nav() {
    return (
        <nav className={styles.wrapper}>
            <Link to="/">
                <img src="/media/logo.svg" alt="logo" />
            </Link>
            <ul>
                <NavLink to="/product">PRODUCT</NavLink>
                <NavLink to="/pricing">PRICING</NavLink>
                <NavLink to="/login" className={styles.login}>
                    LOGIN
                </NavLink>
            </ul>
        </nav>
    );
}
