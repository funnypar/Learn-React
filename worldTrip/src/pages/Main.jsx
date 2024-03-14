import { NavLink, Outlet } from "react-router-dom";
import styles from "./Main.module.css";

export default function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.leftSide}>
                <img src="/media/logo2.svg" alt="logo" />
                <ul>
                    <li>
                        <NavLink to="cities">Cities</NavLink>
                    </li>
                    <li>
                        <NavLink to="countries">Countries</NavLink>
                    </li>
                </ul>
                <Outlet />
                <p>&copy; Copyright 2023 by WorldTrip inc.</p>
            </div>
            <div className={styles.rightSide}></div>
        </div>
    );
}
