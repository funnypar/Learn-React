import { useEffect, useState } from "react";
import "./App.css";
import ListFilm from "./components/ListFilm";
import ListUser from "./components/ListUser";
import Nav from "./components/Nav";
import { useFilms } from "./components/useFilms";

function App() {
    const [query, setQuery] = useState("");
    const [itemSelected, setItemSelected] = useState(null);
    const [WatchedDATABASE, setWatchedDATABASE] = useState(() =>
        JSON.parse(localStorage.getItem("watched"))
    );
    const { DATABASE, isLoad, err } = useFilms(query);

    function onDeletedHandler(id) {
        setWatchedDATABASE(WatchedDATABASE.filter((el) => el.imdbID !== id));
    }

    useEffect(
        () => localStorage.setItem("watched", JSON.stringify(WatchedDATABASE)),
        [WatchedDATABASE]
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
