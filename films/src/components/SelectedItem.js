import { useEffect, useState } from "react";
import Star from "./Star";
import Loader from "./Loader";

const KEY = "2dfd8a66";

export default function SelectedItem({ id, onWatch, onClicked, database }) {
    const [item, setItem] = useState({});
    const [userRating, setUserRating] = useState("");
    const [isLoad, setIsLoad] = useState(false);

    const isRated = database.map((el) => el.imdbID).includes(id);
    const userRatedItem = database.find(
        (item) => item.imdbID === id
    )?.userRating;

    const {
        Title: title,
        Actors: actors,
        Director: director,
        Genre: genre,
        Plot: plot,
        Poster: poster,
        Released: released,
        Runtime: runtime,
    } = item;

    function clickHandler() {
        onWatch({
            ...item,
            userRating: userRating,
        });
        onClicked();
    }

    useEffect(
        function () {
            async function fetchData() {
                setIsLoad(true);
                const req = await fetch(
                    `http://www.omdbapi.com/?apikey=${KEY}&i=${id}`
                );
                const data = await req.json();
                setIsLoad(false);
                setItem(data);
            }
            fetchData();
        },
        [id]
    );

    useEffect(
        function () {
            function callback(e) {
                if (e.code === "Escape") {
                    onClicked();
                }
            }
            document.addEventListener("keydown", callback);
            return () => document.removeEventListener("keydown", callback);
        },
        [onClicked]
    );

    useEffect(
        function () {
            if (!title) return;
            document.title = `Film | ${title}`;
            return () => (document.title = "Mopanofilms");
        },
        [title]
    );

    return (
        <div className="selected-wrapper">
            {isLoad ? (
                <Loader />
            ) : (
                <>
                    <div className="top-part">
                        <img src={poster} alt={title} />
                        <div>
                            <h2>{title}</h2>
                            <p>
                                {released} . {runtime}
                            </p>
                            <p>{genre}</p>
                            <p>
                                <span>⭐️</span> {item.imdbRating} IMDB rating
                            </p>
                        </div>
                    </div>

                    <div className="bottom-part">
                        {!isRated ? (
                            <Star onSetRating={(numb) => setUserRating(numb)} />
                        ) : (
                            <p className="rated">
                                You rated this movie <span>⭐️</span>{" "}
                                {userRatedItem}
                            </p>
                        )}
                        <div className="infos">
                            <p>{plot}</p>
                            <p>Starring {actors}</p>
                            <p>Created by {director}</p>
                        </div>
                        {userRating ? (
                            <button onClick={clickHandler}>Add to List</button>
                        ) : (
                            ""
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
