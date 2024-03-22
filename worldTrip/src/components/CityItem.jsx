/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import Btn from "./Btn";
import { useCities } from "../contexts/CitiesProvider";

export default function CityItem({ data }) {
    const { currentCity, deleteCity } = useCities();
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
            <div
                className={`${styles.city} ${
                    currentCity.id === data.id ? styles.activeCity : ""
                }`}
            >
                <p>
                    <span>{data.emoji}</span> {data.cityName}
                </p>
                <p className={styles.date}>{dateFormat(data.date)}</p>
                <Btn
                    type="city"
                    onClicked={(e) => {
                        e.preventDefault();
                        deleteCity(data.id);
                    }}
                >
                    &times;
                </Btn>
            </div>
        </Link>
    );
}
