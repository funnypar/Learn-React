/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesProvider";
import CityItem from "./CityItem";

export default function CityList() {
    const { cities, isLoading } = useCities();
    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className={styles.wrapper}>
                    {cities.map((el) => (
                        <CityItem data={el} key={el.id} />
                    ))}
                </div>
            )}
        </>
    );
}
