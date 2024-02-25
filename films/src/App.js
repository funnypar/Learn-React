import { useEffect, useState } from "react";
import "./App.css";
import ListFilm from "./components/ListFilm";
import ListUser from "./components/ListUser";
import Nav from "./components/Nav";

const KEY = "2dfd8a66";

function App() {
    const [DATABASE, setDATBASE] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [err, setErr] = useState("");
    const [query, setQuery] = useState("");
    const [itemSelected, setItemSelected] = useState(null);
    const [WatchedDATABASE, setWatchedDATABASE] = useState([]);

    function onDeletedHandler(id) {
        setWatchedDATABASE(WatchedDATABASE.filter((el) => el.imdbID !== id));
    }

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

    return (
        <div className="App">
            <Nav
                filmsNumber={DATABASE.length}
                onSearch={(data) => setQuery(data)}
            />
            <div className="wrapper">
                <ListFilm
                    database={DATABASE}
                    load={isLoad}
                    error={err}
                    onSelected={(id) => setItemSelected(id)}
                />
                <ListUser
                    database={WatchedDATABASE}
                    selected={itemSelected}
                    onClicked={() => setItemSelected(null)}
                    onWatch={(data) =>
                        setWatchedDATABASE((state) => [...state, data])
                    }
                    onDeleted={onDeletedHandler}
                />
            </div>
        </div>
    );
}

export default App;
