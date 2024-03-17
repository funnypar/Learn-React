import styles from "./LeftSide.module.css";
import { NavLink, Outlet } from "react-router-dom";

export default function LeftSide() {
    return (
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
    );
}
