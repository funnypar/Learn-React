/* eslint-disable no-unused-vars */
import styles from "./Form.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesProvider";
import { useNavigate } from "react-router-dom";
import { useUrlParams } from "../hooks/useUrlParams";
import Btn from "./Btn";
import Message from "./Message";
import Spinner from "./Spinner";

export default function Form() {
    const [err, setErr] = useState(false);
    const [userCity, setUserCity] = useState("");
    const [userCountry, setUserCountry] = useState("");
    const [cityEmoji, setCityEmoji] = useState("");
    const [userDate, setUserDate] = useState("");
    const [userText, setUserText] = useState("");
    const { createCity, isLoading } = useCities();
    const [latPosition, lngPosition] = useUrlParams();
    const navigate = useNavigate();

    function convertToEmoji(countryCode) {
        const codePoints = countryCode
            .toUpperCase()
            .split("")
            .map((char) => 127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
    }

    async function submitHandler(e) {
        e.preventDefault();
        const newCity = {
            cityName: userCity,
            country: userCountry,
            emoji: cityEmoji,
            date: userDate,
            notes: userText,
            position: {
                lat: latPosition,
                lng: lngPosition,
            },
        };
        await createCity(newCity);
        navigate("/app/cities");
    }

    useEffect(() => {
        async function fetchCity() {
            try {
                const req = await fetch(
                    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latPosition}&longitude=${lngPosition}`
                );
                const data = await req.json();
                if (!data.countryCode) {
                    setErr(true);
                    throw new Error(
                        "That doesn't seem to be a city. Click somewhere else 😉"
                    );
                }
                setErr(false);
                setUserCity(data.city);
                setCityEmoji(convertToEmoji(data.countryCode));
                setUserCountry(data.countryName);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchCity();
    }, [latPosition, lngPosition]);

    if (!latPosition && !lngPosition)
        return <Message message={"Click On The Map 🤕"} />;

    if (err)
        return (
            <Message
                message={
                    "That doesn't seem to be a city. Click somewhere else 😉"
                }
            />
        );

    if (isLoading) return <Spinner />;

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.city}>
                <label htmlFor="city">City name</label>
                <input
                    type="text"
                    id="city"
                    value={userCity}
                    onChange={(e) => setUserCity(e.target.value)}
                />
                <p>{cityEmoji}</p>
            </div>
            <div>
                <label htmlFor="date">When did you go to ?</label>
                <input
                    type="date"
                    id="date"
                    onChange={(e) => setUserDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="city">Notes about your trip to </label>
                <textarea
                    id="text"
                    cols="30"
                    rows="3"
                    onChange={(e) => setUserText(e.target.value)}
                    required
                ></textarea>
            </div>
            <div>
                <Btn type="add">Add</Btn>
                <Btn
                    type="back"
                    onClicked={(e) => {
                        e.preventDefault();
                        navigate("/app/cities");
                    }}
                >
                    &larr; Back
                </Btn>
            </div>
        </form>
    );
}
