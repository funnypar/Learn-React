import styles from "./City.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesProvider";
import Btn from "./Btn";
import Spinner from "./Spinner";
import { useEffect } from "react";

export default function City() {
    const { currentCity, isLoading, getCity } = useCities();
    const { id } = useParams();
    const navigate = useNavigate();

    function dateFormat(date) {
        return new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date));
    }

    useEffect(() => {
        getCity(id);
    }, [id]);

    if (isLoading) return <Spinner />;

    return (
        <div className={styles.wrapper}>
            <div>
                <h4>CITYNAME</h4>
                <p>
                    <span>{currentCity.emoji}</span> {currentCity.cityName}
                </p>
            </div>
            <div>
                <h4>YOU WENT TO {`${currentCity.cityName}`} ON</h4>
                <p>{dateFormat(currentCity.date || null)}</p>
            </div>
            {currentCity.notes ? (
                <div>
                    <h4>YOUR NOTES</h4>
                    <p>{currentCity.notes}</p>
                </div>
            ) : (
                ""
            )}
            <div>
                <h4>LEARN MORE</h4>
                <a
                    className={styles.link}
                    href={`https://en.wikipedia.org/wiki/${currentCity.cityName}`}
                >
                    Check out {`${currentCity.cityName}`} on Wikipedia &rarr;
                </a>
            </div>
            <Btn
                type="back-city"
                onClicked={(e) => {
                    e.preventDefault();
                    navigate(-1);
                }}
            >
                &larr; Back
            </Btn>
        </div>
    );
}
