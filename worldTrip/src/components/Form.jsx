/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import Btn from "./Btn";
import styles from "./Form.module.css";
import { useUrlParams } from "../hooks/useUrlParams";
import { useEffect, useState } from "react";
import Message from "./Message";

export default function Form() {
    const [err, setErr] = useState(false);
    const [userCity, setUserCity] = useState("");
    const [cityEmoji, setCityEmoji] = useState("");
    const [userDate, setUserDate] = useState("");
    const [userText, setUserText] = useState("");
    const [latPosition, lngPosition] = useUrlParams();
    const navigate = useNavigate();

    function convertToEmoji(countryCode) {
        const codePoints = countryCode
            .toUpperCase()
            .split("")
            .map((char) => 127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
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
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchCity();
    }, [latPosition, lngPosition]);

    return (
        <>
            {!err ? (
                <form className={styles.form}>
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
                        />
                    </div>
                    <div>
                        <label htmlFor="city">Notes about your trip to </label>
                        <textarea
                            id="text"
                            cols="30"
                            rows="3"
                            onChange={(e) => setUserText(e.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        <Btn type="add">Add</Btn>
                        <Btn
                            type="back"
                            onClicked={(e) => {
                                e.preventDefault();
                                navigate(-1);
                            }}
                        >
                            &larr; Back
                        </Btn>
                    </div>
                </form>
            ) : (
                <Message
                    message={
                        "That doesn't seem to be a city. Click somewhere else 😉"
                    }
                />
            )}
        </>
    );
}
