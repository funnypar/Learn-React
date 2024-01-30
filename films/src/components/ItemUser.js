export default function ItemUser({
    name,
    poster,
    userRating,
    imdbRating,
    time,
}) {
    return (
        <div>
            <div className="UserItem-wrapper">
                <img src={poster} alt={name} />
                <div>
                    <p className="name">{name}</p>
                    <ul>
                        <li className="year">⭐️ {userRating}</li>
                        <li className="year">🌟 {imdbRating}</li>
                        <li className="year">⏳ {time}</li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    );
}
