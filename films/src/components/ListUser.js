import ItemUser from "./ItemUser";

export default function ListUser({ database }) {
    return (
        <div className="list">
            <div className="user-control">
                <h3>FILMS YOU WATCHED</h3>
                <div>
                    <ul>
                        <li>#️⃣ 2 Films</li>
                        <li>⭐️ 8.65</li>
                        <li>🌟 9.5</li>
                        <li>⏳ 132 min</li>
                    </ul>
                </div>
            </div>
            {database.map((el) => {
                return (
                    <ItemUser
                        name={el.Title}
                        poster={el.Poster}
                        userRating={el.userRating}
                        imdbRating={el.imdbRating}
                        time={el.runtime}
                    />
                );
            })}
        </div>
    );
}
