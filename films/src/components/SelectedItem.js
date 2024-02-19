import { useEffect, useState } from "react";

const KEY = "2dfd8a66";

export default function SelectedItem({ id }) {
    const [item, setItem] = useState({});
    const {
        Title: title,
        Year: year,
        Actors: actors,
        Awards: awards,
        Country: country,
        DVD: dvd,
        Director: director,
        Genre: genre,
        Language: language,
        Plot: plot,
        Poster: poster,
        Released: released,
        imdbRating: imdbRating,
        Runtime: runtime,
    } = item;

    useEffect(
        function () {
            async function fetchData() {
                const req = await fetch(
                    `http://www.omdbapi.com/?apikey=${KEY}&i=${id}`
                );
                const data = await req.json();
                setItem(data);
            }
            fetchData();
        },
        [id]
    );

    return (
        <div className="selected-wrapper">
            <div className="top-part">
                <img src={poster} alt={title} />
                <div>
                    <h2>{title}</h2>
                    <p>
                        {released} . {runtime}
                    </p>
                    <p>{genre}</p>
                    <p>
                        <span>⭐️</span> {imdbRating} IMDB rating
                    </p>
                </div>
            </div>
            <div className="bottom-part">
                <div>stars</div>
                <div className="infos">
                    <p>{plot}</p>
                    <p>Starring {actors}</p>
                    <p>Created by {director}</p>
                </div>
            </div>
        </div>
    );
}
