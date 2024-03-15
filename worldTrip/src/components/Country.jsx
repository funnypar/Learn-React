/* eslint-disable react/prop-types */
import styles from "./Country.module.css";

export default function City({ data }) {
    return (
        <div className={styles.country}>
            <p>{data.emoji}</p>
            <p>{data.country}</p>
        </div>
    );
}
