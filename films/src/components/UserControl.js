export default function UserControl({ database }) {
    const userStars = database.map((el) => el.userRating);
    const userStarsAverage =
        userStars.reduce((a, b) => a + b) / userStars.length;
    const imbdStars = database.map((el) => el.imdbRating);
    const imbdStarsAverage =
        Math.round(
            (imbdStars.reduce((a, b) => a + b) / imbdStars.length) * 10
        ) / 10;
    const times = database.map((el) => el.runtime);
    const timesAverage = times.reduce((a, b) => a + b) / times.length;

    return (
        <div className="user-control">
            <h3>FILMS YOU WATCHED</h3>
            <div>
                <ul>
                    <li>#️⃣ 2 Films</li>
                    <li>⭐️ {userStarsAverage}</li>
                    <li>🌟 {imbdStarsAverage}</li>
                    <li>⏳ {timesAverage} min</li>
                </ul>
            </div>
        </div>
    );
}
