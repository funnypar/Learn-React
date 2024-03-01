import { useEffect, useState } from "react";

const KEY = "2dfd8a66";

export function useFilms(query) {
    const [DATABASE, setDATBASE] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [err, setErr] = useState("");

    useEffect(
        function () {
            const controller = new AbortController();
            async function fetchData() {
                try {
                    setErr("");
                    setIsLoad(true);
                    if (!query) throw new Error("🎥 Search for a movie");
                    const req = await fetch(
                        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                        { signal: controller.signal }
                    );
                    const data = await req.json();
                    if (data.Response === "False")
                        throw new Error("🥹 Something went wrong...");
                    setDATBASE(data.Search);
                    setIsLoad(false);
                    setErr("");
                } catch (err) {
                    if (err.name !== "AbortError") {
                        console.log(err.message);
                        setErr(err.message);
                    }
                }
            }
            fetchData();

            return () => controller.abort();
        },
        [query]
    );

    return { DATABASE, isLoad, err };
}
