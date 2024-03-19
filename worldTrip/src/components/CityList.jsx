/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import City from "./CityItem";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesProvider";

export default function CityList() {
    const { cities, isLoading } = useCities();
    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className={styles.wrapper}>
                    {cities.map((el) => (
                        <City data={el} key={el.id} />
                    ))}
                </div>
            )}
        </>
    );
}
