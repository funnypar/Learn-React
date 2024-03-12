import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
export default function Nav() {
    return (
        <nav className={styles.wrapper}>
            <img src="/media/logo.svg" alt="logo" />
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
