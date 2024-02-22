const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function UserControl({ database }) {
    const avgImdbRating = average(
        database.map((movie) => movie.imdbRating)
    ).toFixed(1);
    const avgUserRating = average(
        database.map((movie) => movie.userRating)
    ).toFixed(1);
    const avgRuntime = average(
        database.map((movie) => movie.Runtime.split(" ").at(0))
    );

    return (
        <div className="user-control">
            <h3>FILMS YOU WATCHED</h3>
            <div>
                <ul>
                    <li>#️⃣ 2 Films</li>
                    <li>⭐️ {avgUserRating}</li>
                    <li>🌟 {avgImdbRating}</li>
                    <li>⏳ {avgRuntime} min</li>
                </ul>
            </div>
        </div>
    );
}
