/* eslint-disable react/prop-types */
import styles from "./Btn.module.css";

export default function Btn({ children, onClicked, type = "" }) {
    return (
        <button className={`${styles.btn} ${styles[type]}`} onClick={onClicked}>
            {children}
        </button>
    );
}
