/* eslint-disable react/prop-types */
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Country from "./Country";

export default function CountryList({ cities, isLoading }) {
    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country))
            return [
                ...arr,
                { country: city.country, emoji: city.emoji, id: city.id },
            ];
        else return arr;
    }, []);

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className={styles.wrapper}>
                    {countries.map((el) => (
                        <Country data={el} key={el.id} />
                    ))}
                </div>
            )}
        </>
    );
}
