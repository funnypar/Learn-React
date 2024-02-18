import { useEffect, useState } from "react";
import "./App.css";
import ListFilm from "./components/ListFilm";
import ListUser from "./components/ListUser";
import Nav from "./components/Nav";

const KEY = "2dfd8a66";

const WatchedDATABASE = [
    {
        imdbID: "tt1375666",
        Title: "Inception",
        Year: "2010",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        runtime: 148,
        imdbRating: 8.8,
        userRating: 10,
    },
    {
        imdbID: "tt0088763",
        Title: "Back to the Future",
        Year: "1985",
        Poster: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        runtime: 116,
        imdbRating: 8.5,
        userRating: 9,
    },
];

function App() {
    const [DATABASE, setDATBASE] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [err, setErr] = useState("");
    const [query, setQuery] = useState("");
    const [itemSelected, setItemSelected] = useState(null);

    useEffect(
        function () {
            async function fetchData() {
                try {
                    setErr("");
                    setIsLoad(true);
                    if (!query) throw new Error("🎥 Search for a movie");
                    const req = await fetch(
                        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
                    );
                    const data = await req.json();
                    if (data.Response === "False")
                        throw new Error("🥹 Something went wrong...");
                    setDATBASE(data.Search);
                    setIsLoad(false);
                } catch (err) {
                    console.log(err.message);
                    setErr(err.message);
                }
            }
            fetchData();
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
                />
            </div>
        </div>
    );
}

export default App;
