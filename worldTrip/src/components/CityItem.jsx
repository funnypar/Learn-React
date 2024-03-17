/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

export default function CityItem({ data }) {
    function dateFormat(date) {
        return new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date));
    }
    return (
        <Link
            to={`${data.id}?lat=${data.position.lat}&lng=${data.position.lng}`}
            className={styles.wrapper}
        >
            <div className={styles.city}>
                <p>
                    <span>{data.emoji}</span> {data.cityName}
                </p>
                <p className={styles.date}>{dateFormat(data.date)}</p>
                <button>&times;</button>
            </div>
        </Link>
    );
}
