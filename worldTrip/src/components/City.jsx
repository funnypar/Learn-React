/* eslint-disable react/prop-types */
import styles from "./City.module.css";

export default function City({ data }) {
    function dateFormat(date) {
        return new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date));
    }
    return (
        <div className={styles.city}>
            <p>
                <span>{data.emoji}</span> {data.cityName}
            </p>
            <p className={styles.date}>{dateFormat(data.date)}</p>
            <button>&times;</button>
        </div>
    );
}
